# Menghubungkan Database dengan Node

## Berikut ini langkah-langkah untuk menghubungkan database dengan node

1. Persiapkan database, misalnya dapat dibuat menggunakan PGAdmin

2. Dibuat file database connection, dengan contoh sebagai berikut;

```javascript
const { Client } = require('pg')

const db = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'newPasword',
    database: 'note'
}
)

db.connect()
    .then(() => {
        console.log('connected');
    })
    .catch(err => {
        console.error(err);
    })

module.exports = db
```
Variable db menyimpan informasi server di mana database berada.

3. Dibuat file route untuk mengakses database. Untuk method GET, dapat diberikan kode seperti contoh berikut;

```javascript
app.get('/item', (req, res) => {
    db.query('SELECT * FROM note')
        .then(result => {
            res.send(result)
        })
})
```