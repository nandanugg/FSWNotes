// implementasi object destructuring
// untuk merequire pg yang memiliki methode client
const { Client } = require('pg')

// set-up node agar connect dengan postgresql client
// tapi node hanya bisa meng-handle 1 database
// masukkan credential database kita
const db = new Client({
    host: '127.0.0.1', // atau localhost
    port: 5432,
    user: 'dwikyloki',
    password: '123123123',
    database: 'belajar_orm' // property tambahan
})

// cara meng-connect kan database
db.connect()
    .then(() => {
        console.log('database is connected');
    })
    .catch(reason => {
        console.error(reason);
    })

// cara untuk mengekspor var db
// agar bisa digunakan di file lain
// jika ingin mengimplementasikan nya di file lain
// jangan lupa untuk dideklarasikan terlebih dahulu
// const db = require('path file ini')
module.exports = db