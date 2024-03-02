const express = require('express')
const bodyParse = require("body-parser")
const app = express()
const port = 3000


app.use(bodyParse.json());
app.post('/app', (req, res) => { 
    console.log(req.body);   
    res.send('2 + 2 = 4')
})

app.listen(port, () => {
    console.log(`Example app listening on part ${port}`);
})