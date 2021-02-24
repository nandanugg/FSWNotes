## JUDUL : LEARN NODE WITH POSTGRESQL

sebelumnya kita sudah belajar cara membuat RESTful API dan
Middleware, dimana pada project sebelumnya, data kita disimulasikan
menggunakan file db.js

nah pada bagian ini kita akan belajar menghubungkan app
yang kita buat dengan nodeJS dengan salah satu aplikasi
RDBMS yaitu postgreSQL. jadi pada project ini, kita benar2
sudah menggunakan database sungguhan, bukan lagi file db.js
yang isinya array untuk menampung data2 kita.

1. buat folder project kita
2. inisialisasi folder project kita `npm init`
3. didalam membuat sebuah app di nodejs, kita menggunakan
   sebuah framework yang namanya expressjs `npm install express`
3. kemudian install beberapa package atau dependencies
   yang mungkin kita butuhkan
   > `npm install nanoid`
   > `npm install dotenv`
   > `npm install pg`
4. buat webserver dengan menggunakan expressjs, buat file.js khusus
   dan beri nama index.js atau server.js (terserah)
5. setelah webserver dibuat, sekarang buat minimal 1 file route
   yang mengirim respon `hello world` untuk menguji webserver
   yang telah kita buat tadi apakah sudah berfungsi dengan baik
6. jangan lupa untuk menambahkan file .gitignore jika ada file atau
   folder yang tidak ingin dipush ke repo github
7. dan tambahkan juga script start dan dev di package.json
   jika anda sudah menginstall nodemon secara global
   `npm install -g nodemon`

## oke sampai disini, kita akan mulai masuk ke pembahasan
## learn node with postgreSQL

8. update setup yang diperlukan pada file index.js (root directory)
   seperti me-require file route yang dibuat, menambahkan kode
   `app.use(express.json())` jika diperlukan dan lain2
9. buat file itemRoute.js di folder route kemudian kita buat fungsi
   CRUD dan untuk sementara responnya berupa pesan `ok`
10. kemudian kita buat folder baru yang namanya connection
    folder ini akan menampung file2 connection yang akan menghubungkan
    sebuah file route dengan sesuatu yang berada diluar nodejs
    seperti contohnya database
11. buat file databaseConnection.js

## dengan membuat file databaseConnection.js
## tujuan kita adalah menghubungkan itemRoute dengan database
## sehingga bisa menampilkan data dari database, add, edit dan delete
## data dari database.

12. kunjungi website node-postgres.com untuk melihat panduan
    menginstal modul node-postgres di nodejs `npm install pg`

    ### btw node-postgres is a collection of node.js modules for interfacing
    ### with your PostgreSQL database

13. kita lakukan setup pda file databaseConnection.js agar project kita
    khusus pada file itemRoute bisa connect ke database
14. selanjutnya kita buat query CRUD nya di file itemRoute agar kita
    bisa get, add, put, and delete data di database secara realtime via postman

### dah selesai .....

