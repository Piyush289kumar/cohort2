const express = require('express')

const app = express();

function sum(inputAsParams) {
    return inputAsParams;
}

app.get('/', (req, res) => {
    const userQuery = req.query.n;
    const ans = sum(userQuery)
    res.send(`Hi There You'r answer is : ${ans}`)
})

app.listen(3000)