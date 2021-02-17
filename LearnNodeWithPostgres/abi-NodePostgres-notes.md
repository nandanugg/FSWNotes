# Nama Developer: Abi
# Kelas: FSW Pagi
## 8 Februari 2021
# Learn Node With Postgres
## 1. Setup node postgres
Sesungguhnya node dan postgres tidak connect satu sama lain, nah maka kita harus setup supaya mereka bisa connect.<br><br>
initiate npm
```
npm init -y
```
install package e
```
npm install express pg
```
Setelah itu kita bisa setup query pada file route kita, yang nanti akan dipanggil di `index.js`.<br><br> Contoh get item dari note di `itemRoute.js`:
```js
app.get('/item', (req, res) => {
  db.query('SELECT * FROM note')
    .then(result => {
      res.send(result.rows)
    })
})
```
## 2. Object Destructure
Object destructure berperan untuk membuat variabel baru dari property object, dan kita bisa memanggil dengan nama property saja.
```js
const user = {
  name: "abi",
  age: 17,
};


const { name, age } = user;
console.log("way object destructuring:", name);
console.log("way object destructuring:", age);

```
## 3. Connect to Database
Initiate connect database pada nodejs dengan object destructure
```js
const { Client } = require("pg");
```
Memasukkan informasi credential sesuai pada database yang kita gunakan
```js
const db = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "johnmayer",
  password: "333777",
  database: "music",
});
```
Connect database dengan promise apabila connect ataupun tidak akan ada pesan yang ditampilkan
```js
db.connect()
  .then(() => {
    console.log("Database connected");
  })
  .catch((reason) => {
    console.error(reason);
  });
```

