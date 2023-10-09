const express = require("express");
const app = express();
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const port = process.env.PORT || 5000;

//* middleware
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Dazzly is Opened");
});

app.listen(port, () => {
  console.log(`Dazzly is opened on port ${port}`);
});