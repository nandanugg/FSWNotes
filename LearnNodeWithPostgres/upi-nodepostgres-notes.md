## Nama Developer: Upi

## Kelas: FSW Siang

### 8 Februari 2021

# Learn Node with Postgres

## 1.  node-postgres

node-postgres adalah sebuah koleksi module dari node.js untuk berinteraksi dengan PostgreSQL database, sehingga akan memudahkan kita dalam mengakses data dari database.

Sebelum melakukan instalasi node-postgres, kita inisialisasikan terlebih dahulu project nodejs kita dengan perintah berikut:

```bash
npm init
```

Untuk instalasi express dan node-postgres, masukkan perintah berikut pada terminal:

```bash
npm install express pg
```

### 2. Object destructuring

object destructuring akan memudahkan kita dalam memanggil sebuah object baik itu dari file lain ataupun dari module-module yang tersedia dari npm, cara melakukan destructuring object adalah seperti berikut:

```jsx
//object.js
let biodata = {
  name: "Jack",
  age: 18
}
```

Kita definisikan terlebih dahulu sebuah object biodata pada file `object.js`

```jsx
//index.js
const { name, age } = require('./object')

console.log('name:', name)
console.log('age:', age)
```

Setelah itu pada file `index.js` kita membuat sebuah konstanta baru dengan menggunakan metode object destructuring, sehingga kita bisa langsung memanggil property dari object tersebut tanpa perlu memasukkan objectnya ke sebuah variable baru

### 3. Connecting database

Untuk menghubungkan database ke nodejs, buat sebuah file dengan nama misalnya `databaseConnectio.js` kemudian pada baris pertama, tambahkan kode berikut:

 

```jsx
const { Client } = require('pg')
```

Kode di atas merupakan object destructuring untuk module `pg`, setelah itu tambahkan lagi kode berikut:

```jsx
const db = new Client({
  host: '127.0.0.1', // atau localhost
  port: 5432,
  user: 'upi', //sesuaikan dengan user postgres
  password: 'upi', //sesuaikan dengan password postgres
  database: 'note' //sesuaikan dengan database postgres
})
```

Kita membuat sebuah class `Client` baru dengan nama `db` fungsinya adalah untuk memberikan detail informasi mengenai bagaimana cara terhubung dengan postgres seperti alamat ip, port, user, password, dan database yang akan digunakan.

Setelah itu, tambahkan lagi kode berikut:

```jsx
db.connect()
  .then(() => {
    console.log('Database is connected');
  })
  .catch(err => {
    console.error(err);
  })

module.exports = db
```

Kode di atas akan memanggil method `connect()` yang dimana akan menggunakan sebuah promise untuk terhubung pada postgres dengan cara yang sudah kita definisikan sebelumnya.

Kemudian, jika kita jalankan file `databaseConnection.js` nya, maka pada terminal akan menampilkan sebuah output `Database is connected` jika kita berhasil terhubung dengan postgres, sedangkan jika gagal maka akan menampilkan pesan error yang akan di generate secara otomatis oleh method `connect()`