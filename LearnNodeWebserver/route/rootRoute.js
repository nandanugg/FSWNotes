const express = require('express')
const app = express.Router()

app.get('/', (req, res) => { // '/' adalah router route, parameter kedua req res diisi oleh express
    res.render('index', { data: 'abi' }) //apapun yg dimasukkan dalam res.send akan terkirim ke web dengan cara keluar dari npm start dan memulai lagi npm start
}) //kalo route dihapus maka akan terjadi error di local hostnya

app.get('/about', (req, res) => { //jangan lupa garis miring sebelum nama file ejs
    res.render('about')
})

//kalau mau ngurusin error page selain index dan about bikin seperti dibawah
app.get('*', (req, res) => {
    res.render('404')
})

module.exports = app