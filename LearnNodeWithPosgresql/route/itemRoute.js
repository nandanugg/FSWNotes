const express = require('express')
const app = express.Router()
// implementasi var db
const db = require('../connection/databaseConnection')
// import { nanoid } from 'nanoid'   <--------------- penulisan ES7
const { nanoid } = require('nanoid')


// old way
app.get('/item', (req, res) => {
    db.query(`SELECT * FROM note`)
        .then(result => {
            res.send(result.rows)
        })
})

// new way (async await)
// app.get('/item', (req, res) => {
//     db.query(`SELECT * FROM note`)
//         .then(result => {
//             res.send(result.rows)
//         })
// })

app.post('/item', (req, res) => {
    const body = req.body
    const id = nanoid()

    db.query(`INSERT INTO note VALUES ('${id}', '${body.note}')`)
        .then(result => {
            res.send({
                id,
                note: body.note
            })
        })
})

app.put('/item', (req, res) => {
    const body = req.body

    db.query(`UPDATE note
    SET note = '${body.note}'
    WHERE id = '${body.id}'`)
        .then(result => {
            res.send({
                id: body.id,
                note: body.note
            })
        })
})

app.delete('/item', (req, res) => {
    const body = req.body

    db.query(`DELETE FROM note
    WHERE id = '${body.id}'`)
        .then(result => {
            res.send({
                id: body.id
            })
        })
})

module.exports = app