const express = require('express') //mengambil referensi library yg udah diinstall
const app = express()
const port = 3000 // terdapat di semua komputer sebagai network di komputer, sebagai pintu mengakses komputer

app.use(express.static('views')) //menghubungkan ke route ke folder public
app.set('view engine', 'ejs')

const rootRoute = require('./route/rootRoute')
app.use(rootRoute)

app.listen(port, () => { // 
    console.log(`example app listening at http://localhost:${port}`);
})