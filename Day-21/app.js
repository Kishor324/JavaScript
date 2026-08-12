const { MongoClient } = require("mongodb");

const username = encodeURIComponent("<username>");
const password = encodeURIComponent("<password>");
const cluster = "<clusterName>";
const authSource = "<authSource>";
const authMechanism = "<authMechanism>";

let uri =
  `mongodb+srv://kishorbhatt157_db_user:YOUR_PASSWORD@course.yimcu53.mongodb.net/?appName=Course`;

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db("<dbName>");
    const ratings = database.collection("<collName>");

    const cursor = ratings.find();

    await cursor.forEach(doc => console.dir(doc));
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

