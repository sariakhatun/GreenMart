import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // load .env.local variables

const uri = process.env.NEXT_PUBLIC_MONGO_URL
const dbName = process.env.DB_Name;

async function test() {
  if (!uri) {
    console.error("MongoDB URI is not defined!");
    return;
  }
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected successfully to database:", dbName);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

test();
