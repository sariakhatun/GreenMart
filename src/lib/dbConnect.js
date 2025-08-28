import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URL; // <-- use secure env var (not NEXT_PUBLIC)
const dbName = process.env.DB_NAME;

export const collectionNamesObj = {
  productionCollection: "services", // MongoDB collection name
    userCollection: "test_user",
    
}
if (!uri) {
  throw new Error("❌ MONGO_URL not found in environment variables");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In dev, reuse the client between hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, always create a new connection
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  clientPromise = client.connect();
}

export default async function dbConnect(collectionName) {
  const client = await clientPromise; // ✅ ensure connection
  const db = client.db(dbName);
  return db.collection(collectionName);
}
