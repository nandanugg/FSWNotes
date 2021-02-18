# Nama Developer: Abi
# Kelas: FSW Pagi
## 15 Februari 2021
# Learn MCR
## 1. Model
Model merupakan sebagai langkah awal setelah setup awalan, lebih lengkapnya [disini](https://github.com/nandanugg/NoteAPIWithSequelize/tree/mcr-feature) pada branch mcr-feature.<br><br>
Singkatnya kita mensetup database kita dengan orm pada model ini, misalnya membuat table dengan nama Articles yang memiliki beberapa attributes seperti ini:
```
sequelize model:create --name Articles --attributes content:text
```
Maka kita akan memiliki beberapa column pada Articles seperti content yang memiliki data type text. Kemudian langkah selanjutnya memindahkannya ke database kita
```
sequelize db:migrate
```
## 2. Controller
Controller merupakan sebagai hal yang biasanya berisi logic dari backend berupa response yang nantinya akan menghubungkan sesuai dengan request dari user. <br><br>
Jika pada MVC kita tidak memisahkan logic backend dan frontend, di MCR kita memisahkan logic keduanya. Kita bisa membuat beberapa function memungkinkan modifikasi dengan CRUD yang nantinya kita tempatkan di Controller<br><br>
Contohnya adalah membuat function get item
```js
async function get(query) {
    const articles = await Articles.findAll(
        query ? { where: query } : {}
    )
    return articles
}
```
## 3. Router
Berbeda dengan MVC yang terbatas hanya menggunakan get dan post saja sebagai http methods, pada MCR kita tidak dibatasi.<br><br>
Peran Router disini sebagai jalan pada rute kita ketika di modifikasi CRUD dengan http method. <br><br>
Misalnya kita sebagai user ingin menampilkan data maka Router akan mengirimkan response yang dibantu http method seperti ini
```js
app.get('/', async (req, res) => {
    const articles = await get(req.query)
    res.send(articles)
})
```
