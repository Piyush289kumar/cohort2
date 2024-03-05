const express = require('express')

const app = express();
app.use(express.json())

const user = [{
    name: 'UserName',
    kidney: {
        count: 2,
        healthKidneyCount: 1,
    }
}]


app.get('/', (req, res) => {

    const objName = user[0].name
    const kidneyCount = user[0].kidney.count
    const healthKidneyCount = user[0].kidney.healthKidneyCount

    res.send(`Your Name is ${objName} || Kidney Count : ${kidneyCount} || Healthy Kidneys : ${healthKidneyCount}`)
})


app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;

    user[0].kidney.count += isHealthy

    res.json({
        msg: "done"
    })


})



app.listen(3000)