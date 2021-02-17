# Nama Developer: Abi
# Kelas: FSW Pagi
## 4 Februari 2021
# Learn REST Middleware
## 1. REST API
Representational State Transfer adalah menstransfer kondisi dari aplikasi ke database. Database merepresentasikan apa yang terjadi pada state dari aplikasi. <br><br>
GET (READ)
```js
app.get("/item/", (req, res) => {
  res.send(db);
});
```
POST (CREATE)
```js
app.post("/item/", (req, res) => {
  db.push(req.body);
  res.send(req.body);
});
```
PUT (EDIT)
```js
app.put("/item/:index", (req, res) => {
  const index = req.params.index;
  if (!Number(index)) {
    res.status(400).send("input number bitch");
  } else if (db.length - 1 < index) {
    res.status(400).send("index out of number bitch");
  } else {
    db[req.params.index] = req.body;
    res.send(req.body);
  }
});
```
DELETE 
```js
app.delete("/item/:index", (req, res) => {
  const index = req.params.index;
  const deletedItem = db.splice(index, 1);
  res.send(deletedItem);
});
```
## 2. Middleware
Middleware digunakan untuk memodifikasi agar express bisa handle request kita. Tanpa middleware CRUD yang kita buat akan menjadi `undefined`.<br>
Middleware terdiri dari:
- Application Level Middleware
- Built in Middleware
- Route Level Middleware
- Third Party Middleware
- Error Handling Middleware
```js
app.use(express.json()); // express made, if none will get undefined

app.use(itemRoute, root); // our made, route level middleware
```
## 3. HTTP Status Code
HTTP Status Code adalah status yang kita dapatkan berupa response didapatkan dari request.<br>
HTTP status code, terdiri dari:
- 1xx = biasanya proses pada streaming
- 2xx = proses berhasil
- 3xx = proses berhasil tetapi website pindah url
- 4xx = proses tidak berhasil dari user
- 5xx = proses tidak berhasil dari server
<br>
> selengkapnya ada di [http cat](https://http.cat/)