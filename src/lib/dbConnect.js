import dotenv from "dotenv";
dotenv.config(); // MUST be first

import { MongoClient, ServerApiVersion } from "mongodb";

export default function dbConnect(collectionName) {
  const uri = process.env.NEXT_PUBLIC_MONGO_URL;
  const dbName = process.env.DB_Name;

  console.log("atlas uri:", uri);

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  return client.db(dbName).collection(collectionName);
}



async function test() {
  const collection = await dbConnect('testCollection');
  console.log('Connected to collection:', collection.collectionName);
}

test();
