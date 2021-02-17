# Learn REST Middleware
## 1. API
- API (application programming interface) adalah kumpulan aturan yang memungkinkan dua atau lebih program untuk berkomunikasi satu sama lain.
- API dibuat di server untuk kemudian dapat memungkinkan client untuk dapat berkomunikasi dengannya.
- Fungsi API adalah regulator pengambilan data dari aplikasi ke database.

## 2. HTTP Methods
HTTP methods merupakan kumpulan method yang dapat digunakan untuk melakukan request yang akan dikirimkan ke server.
- Get = mengambil
- Post = mengirim
- Put = menaruh atau mengganti semua
- Patch = mengganti sebagian
- Delete = menghapus

## 3. Membuat API dengan middleware
Membuat API dengan bantuan postman sebagai preview dari database server.
``` javascript
// index.js
const express = require("express")
const app = express()
const itemRoute = require("./route/itemRoute")

// middleware bawaan express untuk membaca file json sehingga datanya tidak lagi berupa undefined
app.use(express.json()) 
// middleware buatan sendiri
app.use(itemRoute) 
// middleware buatan sendiri untuk handle error
app.use(function (error, req, res, next) {
    res.send(error.message)
})

const port = 3000
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})
```

``` javascript
// itemRoute.js
const express = require("express")
const db = require("../db")
const app = express.Router()

// untuk meghandle error yang mungkin terjadi
app.get('/error/', (req, res) => {
    inierror
})

// method get atau read
app.get('/item/', (req, res) => {
    res.send(db)
})

// method get atau read berdasarkan index data
app.get('/item/:index', (req, res) => {
    res.send(db[req.params.index])
})

// method post atau create
app.post('/item/', (req, res) => {
    db.push(req.body);
    res.send(req.body)
})

// method put atau update
app.put('/item/:index', (req, res) => {
    const index = req.params.index
    // membuat peringatan error apabila memasukkan perintah yang tidak sesuai
    // apabila perintah yang dimasukkan bukan angka
    if (!Number(index)) { 
        res.status(400).send('masukkan nomor')
    // apabila perintah yang dimasukkan melebihi dari index yang ada
    } else if ((db.length - 1) < index) { 
        res.status(400).send('angkanya kelebihan woy')
    } else {
        db[req.params.index] = req.body
        res.send(req.body)
    }
})

// method delete
app.delete('/item/:index', (req, res) => {
    const index = req.params.index
    const deletedItem = db.splice(index, 1)
    res.send(deletedItem)
})

module.exports = app
```

``` javascript
// db.js yang digunakan untuk menambahkan item
module.exports = [
    {
        name: "Faisal",
        age: 21
    },
    {
        name: "Yanuar",
        age: 23
    },
]
```
Hasil berupa link localhost di copy ke postman untuk menjalankan perintah Get, Post, Put, dan Delete.

---Author: Faisal dan Yanuar---