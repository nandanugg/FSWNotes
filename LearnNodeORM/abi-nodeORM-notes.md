# Nama Developer: Abi
# Kelas: FSW Pagi
## 11 Februari 2021
# Learn MVC
## 1. Asynchronous Javascript
Node js adalah single threaded yang memungkinkan code dijalankan secara asynchronous, yaitu tidak menunggu urutan. Penggunaan secara asynchronous memungkinkan node untuk berjalan dengan 1 core yang mana ini cost effective.
```js
// 1
console.log(`process started`, new Date());

// 2
function callback(cb) {
  setTimeout(() => {
    console.log("this is the callback result", new Date());
  }, 0);
}

// 3
console.log(`process ended`, new Date());
```
Contoh penggunaannya dipadukan dengan set Timeout untuk delay hasil dari code.
```js
process started 2021-02-17T05:39:05.030Z
process ended 2021-02-17T05:39:05.035Z
this is the callback result 2021-02-17T05:39:05.036Z
```
## 2. Setup ORM
ORM ini memungkinkan kita untuk menggunakan query database pada node.Untuk lengkapnya bagaimana lanjutan setup ORM, bisa dilihat [disini](https://github.com/nandanugg/NoteAPIWithSequelize)<br><br>
 
 install sequelize global, check if installed globally: `npm list -g --depth=0`
```
npm install sequeilize-cli -g
```
install package
```
npm install pg sequelize
```
initiate npm
```
npm init -y
```
initiate sequelize
```
sequelize init
```
Menghubungkan dengan database dengan merubah bagian development dengan informasi database kita atau menggunakan .env yang berisi
```env
DB_USERNAME=""
DB_PASSWORD=""
DB_DATABASE=""
DB_HOST=""
DB_DIALECT=""
PORT=""
```
Create database
```
sequelize db:create
```
Create model
```
sequelize model:create --name Notes --attributes note:text

```
Migrate to database
```
sequelize db:migrate
```

## 3. CRUD With ORM
Create
```js
const { Users } = require("./models");

Users.create({
  username: "johnmayer",
  password: "333777",
}).then((result) => {
  console.log(result);
```
Read
```js
const { Users } = require("./models");

Users.findAll({
  where: {
    id: 1,
  },
}).then((result) => {
  console.log("findAll", result);
});
```
Update
```js
const { Users } = require("./models");

Users.update(
  {
    username: "johnmayer",
  },
  {
    where: {
      id: 1,
    },
  }
).then((result) => {
  console.log(result);
});
```
Delete
```js
const { Users } = require("./models");

Users.destroy({
  where: {
    id: 1,
  },
}).then((result) => {
  console.log(result);
});
```
