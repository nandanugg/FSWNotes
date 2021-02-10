## Nama Developer: Upi

## Kelas: FSW Siang

### 8 Februari 2021

# Learn Node ORM

### 1. Asynchronous Javascript

Secara default, javascript menggunakan metode synchronous untuk menjalankan setiap statement, misalnya:

```jsx
console.log('log pertama');
console.log('log kedua');
console.log('log ketiga');
```

Ketika dijalankan, maka statement di atas akan dieksekusi secara berurutan sehingga outputnya akan menjadi seperti berikut:

```jsx
log pertama
log kedua
log ketiga
```

Sedangkan dengan menggunakan metode asynchronous kita dapat menjalankan statement sembari menunggu statement lain sedang melakukan prosesnya, contoh:

```jsx
console.log('process started', new Date());

function callback() {
    setTimeout(() => {
        console.log('this is the callback result', new Date());
    }, 300)
}

callback();
console.log('process ended', new Date());
```

Ketika dijalankan, statement pertama akan dieksekusi oleh javascript, kemudian statement kedua juga akan dieksekusi namun hasil eksekusi akan ditampilkan setelah timeout habis, sembari menunggu timeout habis maka statement berikutnya akan dieksekusi. Contoh outputnya seperti berikut:

```jsx
process started 2021-02-10T09:41:04.301Z
process ended 2021-02-10T09:41:04.310Z
this is the callback result 2021-02-10T09:41:04.325Z
```

### 2. Sequelize ORM

Sequelize adalah salah satu ORM adapter untuk nodejs, untuk menginstall sequelize masukkan perintah berikut

```bash
npm install sequelize-cli -g
```

dan perintah berikut

```bash
npm install pg sequelize
```

Sebelum membuat sebuah project dengan sequelize orm, kita perlu menginisialisasikan nodejs project terlebih dahulu

```bash
npm init -y
```

Setelah itu, baru kita bisa menggunakan perintah berikut

```bash
sequelize init
```

Ketika menginisialisasikan sequelize, kita akan mendapatkan 4 buah direktori baru yaitu `config`, `migrations`, `models`, dan `seeders` . 

Untuk menghubungkan sequelize dengan postgresql, ubah file `config.json` yang berada di direktori `config` dan pada bagian development atur credentials untuk koneksi ke postgres, contoh:

```jsx
"development": {

  "username": "postgres",

  "password": "upi",

  "database": "note",

  "host": "127.0.0.1",

  "dialect": "postgres"

}
```

Setelah itu, untuk membuat database yang sudah didefinisikan pada file `config.json` bisa menggunakan perintah berikut pada terminal:

```bash
sequelize db:create
```

### 3. CRUD with Sequelize

Untuk melakukan eksekusi CRUD pada postgres dengan menggunakan sequelize, setelah membuat database kita buat sebuah model baru, misalnya dengan perintah berikut:

```bash
sequelize model:create --name Notes --attributes note:string
```

Perintah di atas akan membuat sebuah model baru untuk keperluan migrate. Setelah itu jalankan perintah berikut untuk melakukan migrasi (pembuatan table) database:

```bash
sequelize db:migrate
```

Perintah di atas akan membuat sebuah table baru dengan nama `Notes` dengan kolom `note`

**CREATE**

Untuk membuat data baru pada table, kita dapat menggunakan kode berikut:

```jsx
const { Notes } = require('./models')

Notes.create({
    note: "hello note",
}).then(result => console.log('create', result))
```

Ketika kode tersebut dijalankan, maka pada kolom note akan ada data baru berupa string `"hello note"`

**READ**

Untuk membaca data yang ada pada table notes, kita dapat menggunakan kode berikut:

```jsx
// semua data
Notes.findAll({
    where: {
        id: 1
    }
}).then(result => console.log('findAll', result))

// satu data
Notes.findOne({
    where: {
        id: 1
    }
}).then(result => console.log('findOne', result))
```

Ketika kode tersebut dijalankan, maka kita akan mendapatkan sebuah array yang berisi data-data yang kita cari jika kita menggunakan method `findAll()` sedangkan kita akan mendapatkan sebuah data berupa object jika kita menggunakan method `findOne()`

**UPDATE**

Untuk mengubah data yang sudah ada pada table notes, kita dapat menggunakan kode berikut:

```jsx
Notes.update({
    note: "note baru"
}, {
    where: {
        id: 1
    }
}).then(result => console.log('update', result))
```

Ketika kode tersebut dijalankan, maka data note dengan id = 1 akan berubah menjadi `"note baru"`

**DELETE**

Untuk menghapus data yang ada pada table notes, kita dapat menggunakan perintah berikut:

```jsx
Notes.destroy({
    where: {
        id: 1
    }
}).then(result => console.log(result))
```

Ketika kode tersebut dijalankan, maka data dengan id = 1 akan dihapus dari table notes