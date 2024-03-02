const express = require('express')
const app = express()
const port = 3000

app.post('/app', (req, res) => {
    console.log(req);
    res.send('2 + 2 = 4')
})

app.listen(port, () => {
    console.log(`Example app listening on part ${port}`);
})