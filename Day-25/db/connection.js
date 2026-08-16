const mongoose = require('mongoose');

const uri = "mongodb://kishorbhatt157_db_user:kishor123@ac-rqylskf-shard-00-00.wlpqwag.mongodb.net:27017,ac-rqylskf-shard-00-01.wlpqwag.mongodb.net:27017,ac-rqylskf-shard-00-02.wlpqwag.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-11a3db-shard-0&authSource=admin&retryWrites=true&w=majority";

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("Connected successfully to MongoDB Atlas!");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
}

module.exports = connectDB;