const express = require('express') //mengambil referensi library yg udah diinstall
const app = express.Router()

app.get('/', (req, res) => { // '/' merupakan get ke rute root
    res.render('index', { data: 'aku' }) //dapat membaca suatu file didalam express static(di file index.js)
})

// app.get('/:path', (req, res) => {// menggunakan path yang sesuai dengan param require
//     res.render(req.params.path)
// })

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('*', (req, res) => {
    res.render('404')
})

module.exports = app