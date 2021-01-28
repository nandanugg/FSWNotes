const express = require('express')
const app = express.Router()

app.get('/', (req, res) => {
    res.render('index', { name: "Bob" })
})

app.get('/about', (req, res) => {
    res.render('about', { name: "Bob" })
})

app.get('*', (req, res) => {
    res.render('404')
})

module.exports = app