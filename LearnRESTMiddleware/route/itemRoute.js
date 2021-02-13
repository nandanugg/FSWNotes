const express = require('express')
const app = express.Router()
const db = require('../db')

//melayani request dengan method GET
app.get('/item', (req, res) => {
    res.send(db)
})

//melayani request dengan method POST
app.post('/item', (req, res) => {
    db.push(req.body)
    //console.log(req.body);
    res.send(req.body)
})

//melayani request dengan method PUT
app.put('/item/:index', (req, res) => {
    const index = req.params.index
    if (!Number(index)) {
        res.status(400).send("param should be number")
    } else if ((db.length - 1) < Number(index)) {
        res.status(400).send('params should be equal or less')
    } else {
        db[req.params.index] = req.body
        res.send(req.body)
    }
})

//melayani request dengan method DELETE
app.delete('/item/:index', (req, res) => {
    const deletedItem = db.splice(req.params.index, 1)
    res.send(deletedItem)
})

//membuat global error
app.get('/error', (req, res) => {
    ulala
})

module.exports = app