const express = require("express")
const db = require("../db")
const app = express.Router()

app.get('/error', (res, send) => {
    inierror
})
app.get('/item/', (req, res) => {
    res.send(db)
})

app.get('/item/:index', (req, res) => {
    res.send(db[req.params.index])
})

app.post('/item/', (req, res) => {
    db.push(req.body)
    res.send(req.body)
})

app.put('/item/:index', (req, res) => {
    const index = req.params.index
    if (!Number(index)) {
        res.status(400).send('Nomor cuk')
    } else if ((db.length - 1) < index) {
        res.status(400).send('kebanyakan cuk indexnya')
    } else {
        db[req.params.index] = req.body
        res.send(req.body)
    }
})

app.delete('/item/:index', (req, res) => {
    const index = req.params.index
    const deletedItem = db.splice(index, 1)
    db.splice()
    res.send(deletedItem)
})

module.exports = app