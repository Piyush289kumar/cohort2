const express = require("express");

const app = express();

let requestCounter = 0;

const resquestCountFnc = (req, res, next) => {
  if (requestCounter == 5) {
    return res.status(404).json({
      msg: "Too Much Request Hits",
      
    });
  }
  requestCounter++;
  next();
};

app.use(resquestCountFnc);

app.get("/Login", (req, res) => {
  res.json({
    msg: "Login.....!",
  });
});

app.get("/requestCounter", (req, res) => {
  res.json({
    requestHitCount: requestCounter,
  });
});

app.listen(3000);
