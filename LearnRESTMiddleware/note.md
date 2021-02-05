## Nama Developer : Ilyas Mahfud
## Kelas : FSW Siang
## 3 February 2021

# Learn RESTMiddleware

>rest API -> mempresentasikan apa yg terjadi didatabase di tampilan user

mebedakan API dan staticweb
RESTful -> menggambarkan bentuk API itu seperti apa
request dan respon dibangun dengan :
- nedpoint/rute/path
- method
- headers = cara menyisipkan 
- data(body)  ; tempat memasukkan data 

>Endpoint adalah rute/path
dalam rute/path tanda ? dan & adalah pemisah parameter dimana parameter berfungsi sebagai modifikator tampilan web

>HTTP Method
- GET, mengambil data
- Post, memasukkan data
- put, mengganti data secara keseluruhan ke data yg baru 
- patch, untuk perubahan yg sedikit2
- delete, menghapus data

>header, menyisipkan informasi ekstra. asal dari mana, os apa, akses dari url apa dari browser apa, dll

>body, apa data yg mau dimasukkan. hanya digunakan di method post, put/patch atau delete

>HTTP status codes, kode berupa angka dari 100 sampai 500

untuk mengingat buka http.cat
- 100 atau continu, untuk data2 streaming. contoh garis buffering di youtube
- 102 atau processing, kamera AI 
- 200 atau ok, request selesai di proses
- 201 atau created, request2 yg membutuhkan pembuatan
- 204 atau no content, meerequest tapi server ga ada apa2
- 301 atau moved permanently, masukkan gmail.com maka akan berubah url nya
- 400 atau bad request, ketika mengirim data tspi dstsnys dslsh
- 401 atau unauthorizad, ketika orang ingin mengakses datanya tapi harus dengan kunci
- 500 atau internal server eroro, kesalahan developer dalam mengelola server

>membuat restful API
folder
- npm init
- npm install express
- buat index.js
- set up express di index.js
- bikin script start dan dev di packade.json
    "run": "node index.js",
    "dev": "nodemon index.js",
	
command in terminal
npm run dev