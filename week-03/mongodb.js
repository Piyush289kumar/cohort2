const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://piyushraikwar289:Piyush%40289MDB@cluster0.5lpcsrr.mongodb.net/"
);
const userAppDB = mongoose.model("userapp", {
  username: String,
  password: String,
  email: String,
});

app.post("/insert", async (req, res) => {
  const formUsername = req.body.username;
  const formPassord = req.body.pwd;
  const formEmail = req.body.email;

  const existingUser = await userAppDB.findOne({ username: username });
  if (existingUser) {
    res.status(400).send("Username already exists");
  }

  try {
    const insertOperation = new userAppDB({
      username: formUsername,
      password: formPassord,
      email: formEmail,
    });
    insertOperation.save().then(() => res.json({ msg: "Inserted....!" }));
  } catch (error) {
    res.json({ msg: "Not Inserted....!" });
  }
});

app.listen(3000);
