const express = require("express");
const { connectToDB, getDB } = require("./db");

const app = express();

let db;

connectToDB((error) => {
    if (!error) {
      db = getDB();
    }
  console.log(`connectToDB: ${db}`);
});

// routes

app.get("/books", (req, res) => {
  let collectionResponse = [];

  db.collection("bookdata")
    .find()
    .forEach((element) => collectionResponse.push(element))
    .then(() => {
      res.status(200).json(collectionResponse);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the document" });
    });
});

app.listen(3000, () => {
  console.log("App Listening on Port : 3000");
});