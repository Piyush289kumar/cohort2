const express = require('express')
const zod = require('zod')

const mySchema = zod.array(zod.number())
const app = express();

app.use(express.json())

app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const zodResponse = mySchema.safeParse(kidneys)

    res.json(
        {
            zodResponse
        }
    )
})
app.listen(3000)