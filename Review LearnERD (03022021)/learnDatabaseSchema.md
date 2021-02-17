# Learn Database Schema
Materi pada hari ini adalah bagaimana cara membuat database dengan baik dan benar. Dibawah ini adalah contoh dalam kasus struk pembelian suatu toko roti. Langkah-langkah yang dilakukan adalah
### 1. Membuat list yang harus ada di dalam transaksi kasir
Membuat daftar apa saja yang mungkin ada dan dibutuhkan dalam suatu transaksi dengan melihat dari struk kasir
- no struk
- nama produk
- harga produk
- waktu mulai transaksi
- waktu akhir transaksi
- nama kasir
- id kasir
- posisi kasir
- produk quantity
- metode pembayaran

nice to have : nama cabang

### 2. Membuat tabel dalam dbdiagram.io
Membuat kode untuk menampilkan tabel secara langsung di dbdiagram
```
// contoh membuat tabel
table payment_methods {
  // pk adalah primary key dimana setiap data memiliki data yang berbeda dan bertindak sebagai identifier
  id int [pk]
  name varchar(12) [not null]
}

table cashiers {
  id int [pk]
  name varchar(30) [not null]
}

table pos {
  id int [pk]
  name varchar(8) [not null]
}
```

## 3. Membuat relasi many to many
Membuat hubungan antara satu tabel transaksi yang dapat memiliki banyak item dan item yang dapat dimiliki oleh banyak transaksi
```
table transactions {
  id int [pk]
  cashier_id int [ref: > cashiers.id]
  start_transaction timestamp [not null]
  end_transaction timestamp [not null]
  payment_methods_id int [ref: > payment_methods.id]
  pos int [ref: > pos.id]
}

// cara membuat hubungan many to many adalah menggunakan tabel penengah
// 1 transaksi bisa punya banyak item, 1 item bisa punya banyak transaksi

// SELECT * FROM transaction
// JOIN transaction_items ON transaction.id = transaction_items.transaction.id

// table yang di join . kolom

table transaction_items {
  id int [pk]
  item_id int [ref: > items.id]
  transactions_id int [ref: > transactions.id]
  quantity int [not null]
}

table items {
  id int [pk]
  name varchar(120) [not null]
  price int [pk]
}
```

---Author: Faisal, Yanuar, dan Chania---