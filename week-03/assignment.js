const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");

const jwtPwd = "123456";
const emailSchema = zod.string().email();
const app = express();

app.use(express.json());

const constUsername = "officepiyushraikwar289@gmail.com";

app.get("/", (req, res) => {
  res.json({
    Msg: "HTTP Sever Created On Express JS",
  });
});

app.post("/signup", (req, res) => {
  try {
    const userName = emailSchema.parse(req.body.username);
    const pwd = req.body.password;

    const token = jwt.sign({ username: userName }, jwtPwd);
    res.json({
      token,
    });
  } catch (error) {
    // res.statusCode(411);
    res.status(403).send({ "Invalid email:": error });
  }
});

app.get("/login", (req, res) => {
  const userBrowerJWTToken = req.headers.authorization;

  try {
    decoded = jwt.verify(userBrowerJWTToken, jwtPwd);
    console.log(decoded);
    if (constUsername === decoded.username) {
      res.json({
        msg: "verify",
      });
    } else {
      res.json({
        msg: "Not verify",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.json({
      error: error,
    });
  }
});

app.listen(3000);
