const express = require('express')
const app = express.Router()

app.get('/', (req, res) => {   //parameter pertama merupakan rute root, dan parameter kedua merupakan arrow function
    res.render('index', { data: 'dwiky' })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('*', (req, res) => {
    res.render('404')
})


module.exports = app