import "dotenv/config";
import { MongoClient } from "mongodb";
const uri = process.env.DATABASE_URL!;
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db("myFirstDatabase");
    const test = database.collection("Test");
    await test.insertOne({});
    const testDate = database.collection("DateTimeTest");
    await testDate.insertOne({});
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
