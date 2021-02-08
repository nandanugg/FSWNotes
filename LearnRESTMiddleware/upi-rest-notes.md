## Nama Developer: Upi

## Kelas: FSW Siang

### 21 Januari 2021

# Learn REST Middleware

## 1. Middleware

Middleware untuk melakukan handling request sebelum request tersebut diproses oleh arrow function, salah satu middleware yang sering digunakan adalah application-level middleware, contoh:

```jsx
app.get('/user/:id', (req, res) => {
  console.log('user id:', req.params.id)
})
```

Jika kode di atas dijalankan, ketika user mengakses route misalnya `/user/4`,  maka pada terminal akan memberikan output `user id: 4` 

## 2. REST API

Representational state transfer adalah standar dari sebuah arsitektur software yang digunakan pada web services, hal paling sederhana yang dapat dilakukan ketika membuat sebuah REST API adalah membuat sebuah sistem CRUD (Create, Read, Update, Delete).

### Create

Pada expressjs, kita bisa membuat sebuah sistem create dengan method **POST**, contoh:

```jsx
app.post('/register', (req, res) => {
  db.push(req.body)
  res.send(req.body)
})
```

Ketika kita mengakses route `/register` dan memberikan sebuah data pada request body kita, maka data tersebut nantinya akan di push ke dalam database dan akan mengembalikan nilai dari body yang kita berikan

### Read

Untuk read sendiri menggunakan method **GET** yang akan memberikan data ke client, contoh:

```jsx
app.get('/item', (req, res) => {
  res.send(item)
}) 
```

Ketika kita mengakses route `/item` maka express akan memberikan data yang ada pada variable item

### Update

Jika kita ingin mengupdate sebuah data, kita bisa menggunakan method **PUT** atau **PATCH** , contoh:

```jsx
app.put('/item/:id', (req, res) => {
  db[req.params.id] = req.body
  res.send(req.body)
})
```

Ketika kita mengakses route `/item/5` dengan memberikan data pada body, maka data yang ada pada database dengan index 5 akan berubah sesuai dengan data yang kita berikan

### Delete

Untuk menghapus sebuah data, kita bisa menggunakan method **DELETE**, contoh:

```jsx
app.delete('/item/:id', (req, res) => {
  const deletedItem = db.splice(req.params.id, 1)
  res.send(deletedItem)
})
```

Ketika mengakses route `/item/5` dengan method delete, maka akan menghapus data yang ada pada database dengan index 5 dan memberikan respon berupa data yang sudah dihapus

## 3. HTTP Code

Setiap kita melakukan request ke sebuah API, kita selalu akan menerima sebuah respon dengan HTTP Code, baik itu ketika terjadi error maupun request kita berhasil. Ada banyak HTTP Code yang perlu diketahui, cara mudahnya adalah dengan mengunjungi situs [HTTP.cat](https://http.cat) yang dimana akan memberikan sebuah penjelasan mengenai HTTP Code dengan gambar berupa kucing.

Selain dengan mengunjungi situs tersebut, kita juga bisa langsung mengakses dengan route seperti berikut:

```
https://http.cat/[status code]
```

Contoh:

```
https://http.cat/400
```