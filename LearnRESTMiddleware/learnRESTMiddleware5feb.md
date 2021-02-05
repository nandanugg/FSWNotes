# Nama Developer : Faisal Juliandra
## Kelas : FSW Pagi
### 5 Februari 2021
# Learn REST Middleware 5 Feb
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
- Put untuk mereplace data
- Patch untuk update data sebagian

## 3. Properti yang dimiliki Error
Error memiliki 3 properti yang biasa muncul ketika menemukan error, diantaranya:
- Name (reference error, type error, dan lainnya)
- Message (isi dari error)
- Stack