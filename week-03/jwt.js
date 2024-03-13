const express = require("express");
const jwt = require("jsonwebtoken");
const { object } = require("zod");
const jwtPassword = "123456";
const app = express();
app.use(express.json())
const ALL_USERS = [
    {
        username: "piyushraikwar289@gmail.com",
        password: "123",
        name: "Piyush Kumar Raikwar",
    },
    {
        username: "officepiyushraikwar289@gmail.com",
        password: "123123",
        name: "Office Piyush Kumar Raikwar",
    },
];
function userExists(username, password) {
    let userExistsResponse = false;
    ALL_USERS.map((item, idx) => {
        if (item.username === username && item.password === password) {
            userExistsResponse = true;
        }
    });
    return userExistsResponse;
}
app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesn't exist in our memory DB",
        });
    }
    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});
app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        res.json({
          users : ALL_USERS.filter((item, idx)=>(item.username == username))
        })
    } catch (error) {
        return res.status(403).json({
            msg: "Invalid Token",
        });
    }
});
app.listen(3000);
