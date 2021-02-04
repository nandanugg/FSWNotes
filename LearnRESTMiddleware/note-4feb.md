## Nama Developer   : Yanuar
## Kelas    : FSW Siang
### 4 Februari 2021

# Learn REST Middleware

## 1. Method POST
Mengirim data pada body

``` javascript
//contoh source code
app.post('/item', (req, res) => {
    db.push(req.body)
    res.send(req.body)
})
```
## 2. Method PUT
Melakukan update data dengan beberapa tambahan untuk mengatasi eror route dan menambahkan status kode


``` javascript
app.put('/item/:index', (req, res) => {
    const index = req.params.index
    if (!Number(index)) {
        res.status(400).send("Params should be number")
    } else if ((db.length - 1) < Number(index)) {
        res.status(400).send("Params should be equal or less")
    } else {
        db[index] = req.body
        res.send(req.body)
    }
})
```

## 3. Method DELETE
Menghapus data

``` javascript
app.delete('/item/:index', (req, res) => {
    const deletedItem = db.splice(req.params.index, 1)
    res.send(deletedItem)
})
```

## 4. Build in Middleware
middleware bawaan express, diantaranya ada express.json, untuk membaca file json sehingga datanya tidak lagi berupa undefined

``` javascript
// build in middleware
app.use(express.json())
```

## 5. Route Level Middleware
seperti express tetapi jangkauan lebih kecil,fokus pada route. Memudahkan menambahkan middleware yg akan dipakai pada router itu saja

``` javascript
// route level middleware
const express = require('express')
const app = express.Router()

app.get('/', (req, res) => {
    res.send("Hello World")
})

module.exports = app
```

## 6. Eror Handler Middleware
Dipakai untuk menangani eror yang terjadi

``` javascript
// error handler middleware
app.use(function (error, req, res, next) {
    res.status(500).send('Error : ', error)
})
```

## 6. Belajar Status Kode
Mempelajari bermacam status kode

Disini :
http.cat

## 7. Membuat projek baru
urutan yang harus dilakukan untuk membuat projek baru

1. bikin folder
2. npm init
3. npm install express
4. bikin index.js
5. bikin script start dan dev di package.json