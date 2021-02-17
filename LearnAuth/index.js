require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())
app.use('/', require('./routes/authRoute'))
app.use('/article', require('./routes/articleRoute'))

app.use(function (error, req, res, next) {
    res.send(error)
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`);
})