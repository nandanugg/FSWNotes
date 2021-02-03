# Nama Developer : Faisal Juliandra
## Kelas : FSW Pagi
### 21 Januari 2021
# Learn Database Schema
## 1. Membuat list yang harus ada di dalam transaksi kasir
Membuat daftar apa saja yang mungkin ada dan dibutuhkan dalam suatu transaksi yang dibuktikan dari struk kasir
- check no
- nama produk
- harga produk
- waktu mulai transaksi
- waktu akhir transaksi
- nama kasir
- id kasir
- posisi kasir
- produk quantity
- metode pembayaran

- nice to have : nama cabang

## 2. Membuat tabel dalam dbdiagram
Membuat kode untuk menampilkan tabel secara langsung di dbdiagram
```
// contoh membuat tabel
table payment_methods {
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

// cara bikin hubungan many to many pake tabel penengah
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