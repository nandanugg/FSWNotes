const express = require('express')
const app = express() //menjadikan express jadi function
const port = 3000

app.use(express.static('views'))
app.set('view engine', 'ejs')

const rootRoute = require('./route/rootRoute')
app.use(rootRoute) //ini hanya bisa digunakan untuk variable app yang pake express

// app.get('/', (req, res) => { // '/' adalah router route, parameter kedua req res diisi oleh express
//     res.send('Hello Babang!') //apapun yg dimasukkan dalam res.send akan terkirim ke web dengan cara keluar dari npm start dan memulai lagi npm start
// })  //ini dihapus pindah ke rootRoute.js

app.listen(port, () => { //port adalah sebuah pintu yang ada di setiap komputer, tanpa port browser tidak dapat mengakses express kita
    console.log(`Example app listening at http://localhost:${port}`) //localhost merupakan domain yang ada di komputer kita sendiri
})