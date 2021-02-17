# Learn REST Middleware
## 1. CRUD
CRUD merupakan singkatan dari Create, Read, Update, dan Delete.
- Create menggunakan Post
  ``` javascript
  app.post('/item/', (req, res) => {
    db.push(req.body);
    res.send(req.body)
    })
    ```
- Read menggunakan Get
  ``` javascript
  app.get('/item/', (req, res) => {
    res.send(db)
    })
    ```
- Update menggunakan Put atau Patch
    ``` javascript
  app.put('/item/:index', (req, res) => {
    const index = req.params.index
    if (!Number(index)) {
        res.status(400).send('masukkan nomor')
    } else if ((db.length - 1) < index) {
        res.status(400).send('angkanya kelebihan woy')
    } else {
        db[req.params.index] = req.body
        res.send(req.body)
    }
    })
    ```
- Delete menggunakan Delete
    ``` javascript
    app.delete('/item/:index', (req, res) => {
    const index = req.params.index
    const deletedItem = db.splice(index, 1)
    res.send(deletedItem)
    })
    ```

## 2. Perbedaan Put dan Patch
- Put untuk mereplace atau mengganti data yang sudah ada dengan data yang baru.
- Patch untuk mengupdate sebagian data.

## 3. HTTP status code error
- 200++ = request berhasil
- 300++ = request dialihkan ke URL lainnya
- 400++ = error yang berasal dari client
- 500++ = error yang berasal dari server

## 4. Properti yang dimiliki Error
Variabel error memiliki 3 properti yang biasa muncul ketika terjadi error, diantaranya:
- Name (contoh: reference error, type error, dan syntax error)
- Message (isi dari error)
- Stack

---Author: Faisal dan Chania---