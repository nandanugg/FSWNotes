const express = require('express') //mengambil referensi library yg udah diinstall
const app = express.Router()

let counter = 1

app.get('/', (req, res) => { // '/' merupakan get ke rute root
    counter++
    res.render('index', {
        counter: counter,
        isMorning: true,
        names: ['Katyln', 'Maegan', 'yutub']
    }) //dapat membaca suatu file didalam express static(di file index.js)
})

app.get('/:path', (req, res) => {// menggunakan path yang sesuai dengan param require
    console.log(req.params);
    res.render(req.params.path, {}, (err, html) => {
        if (err) {
            res.render('404')
        } else {
            res.send(html)
        }
    })
})

// app.get('/about', (req, res) => {
//     res.render('about')
// })

app.get('*', (req, res) => {
    res.render('404')
})

module.exports = app