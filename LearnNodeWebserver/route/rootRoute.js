const express = require('express')
const app = express.Router() //Router untuk mebuat rute

app.get('/', (req, res) => { //app.get = melayani exspress untuk mengakses rute root
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about', { data: 'backend' }) //untuk emnyisipkan dari backend ke frontend
})

// semua rute kecuali rute2 diatas
app.get('*', (req, res) => {
    res.render('404')
})

module.exports = app // appnya yg di cetak