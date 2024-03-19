const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    Msg: "HTTP Sever Created On Express JS",
  });
});

app.listen(3000);
