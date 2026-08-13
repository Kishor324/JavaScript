const express = require("express");
const connectDB = require("./db");

const app = express();

(async () => {
  const db = await connectDB();

  app.get("/", async (req, res) => {
    const students = await db.collection("students").find().toArray();
    res.render("index", { students });
  });

  app.listen(3000, () => {
    console.log("Server running");
  });
})();