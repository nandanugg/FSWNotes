# Nama Developer : Faisal Juliandra
## Kelas : FSW Pagi
### 21 Januari 2021
# Learn REST Middleware
## 1. API
API (application programming interface) adalah kumpulan aturan yang memungkinkan dua atau lebih program untuk berkomunikasi satu sama lain.
API dibuat di server untuk kemudian dapat memungkinkan client untuk dapat berkomunikasi dengannya.
Fungsi api yaitu regulator pengambilan data dari aplikasi ke database.

## 2. HTTP Methods
Merupakan method yang dapat kita gunakan untuk melakukan request yang akan kita kirimkan ke server
- Get mengambil
- Post mengirim
- Put menaruh atau mengganti semua
- Patch mengganti sebagian
- Delete hapus

## 3. Membuat API dengan middleware
Membuat API dengan bantuan postman sebagai preview dari database server.
``` javascript
// index.js
const express = require("express")
const app = express()
const itemRoute = require("./route/itemRoute")

app.use(express.json()) //middleware bawaan express
app.use(itemRoute) //middleware buatan sendiri
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
    if (!Number(index)) { //apabila perintah yang dimasukkan bukan angka
        res.status(400).send('masukkan nomor')
    } else if ((db.length - 1) < index) { //apabila perintah yang dimasukkan melebihi dari index yang ada
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
        name: "Juliandra",
        age: 21
    },
]
```
Hasil berupa link localhost di copy ke postman untuk menjalankan perintah Get, Post, Put, dan Delete.
