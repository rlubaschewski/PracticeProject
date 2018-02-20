const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// console logs
const morgan = require('morgan')

const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || 8081, listen)

function listen() {
    console.log('Server is listening on port 8081')
}

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.name}, user was registered, have fun`
    })
})