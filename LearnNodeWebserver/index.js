//exspress =library untuk webserver
// require = global function untuk mengambil referensi dari suatu library
const express = require('express')
const app = express()
const port = 3001

app.use(express.static('views'))//mereferensikan file yg ada dalam public
app.set('view engine', 'ejs')

const rootRoute = require('./route/rootRoute')
app.use(rootRoute)

app.listen(port, () => { //port untuk broser agar bisa mengakses program kita
    console.log(`Example app listening at http://localhost:${port}`)
})