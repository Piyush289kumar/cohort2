const express = require('express')
const app = express();
app.get('/health-checkup', (req, res) => {
    const kidneyId = req.query.kidneyId
    const user = req.headers.username;
    const password = req.headers.password;
    if (user === "Piyush" && password === '123') {
        if (kidneyId != 1 && kidneyId != 2) {
            res.status(411).json({
                msg: "wrong inputs"
            })
            return
        }
        res.send('Your Healthy')
    } else {
        res.status(403).json({
            msg: "User doesn't exist"
        })
        return
    }
})
app.listen(3000)