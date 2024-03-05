const express = require('express')

const app = express();

const user = {
    name: 'UserName',
    kidney: {
        count: 2,
        healthKidneyCount: 1,
    }
}


app.get('/', (req, res) => {

    const objName = user.name
    const kidneyCount = user.kidney.count
    const healthKidneyCount = user.kidney.healthKidneyCount

    res.send(`Your Name is ${objName} || Kidney Count : ${kidneyCount} || Healthy Kidneys : ${healthKidneyCount}`)
})


app.delete('/', (req, res) => {
    const objName = user.name
    const kidneyCount = user.kidney.count
    const healthKidneyCount = user.kidney.healthKidneyCount

    const deleteCount = req.query.d;

    res.send(`Your Name is ${objName} || Kidney Count : ${kidneyCount - deleteCount} || Healthy Kidneys : ${healthKidneyCount}`)
})

app.listen(3000)