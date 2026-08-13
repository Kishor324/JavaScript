const { MongoClient } = require("mongodb");

const uri =
"mongodb://kishorbhatt157_db_user:Kishor123@ac-rqylskf-shard-00-00.wlpqwag.mongodb.net:27017,ac-rqylskf-shard-00-01.wlpqwag.mongodb.net:27017,ac-rqylskf-shard-00-02.wlpqwag.mongodb.net:27017/?ssl=true&replicaSet=atlas-11a3db-shard-0&authSource=admin&retryWrites=true&w=majority&appName=test";

const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    const db = client.db("school");
    const collection = db.collection("student");

    const result = await collection.insertOne({
      name: "Kishor",
      age: 20,
      address: "Nepal",
    });

    console.log("Inserted ID:", result.insertedId);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

connectDB();