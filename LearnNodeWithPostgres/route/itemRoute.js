const express = require('express')
const app = express.Router()
const db = require('../connection/databaseConnection')

//old way
app.get('/item', (req, res) => {
    db.query(`SELECT * FROM note`)
        .then(result => {
            res.send(result)
        })
})

// //new way (async await)
// app.get('/item', (req, res) => {
//     const result = await db.query(`SELECT * FROM note`)
//     res.send(result.rows)
// })

app.post('/item', (req, res) => {
    const body = req.body
    const id = nanoid()
    res.send({ data: null })
})

app.put('/item', (req, res) => {
    res.send({ data: null })
})

app.delete('/item', (req, res) => {
    res.send({ data: null })
})

module.exports = app