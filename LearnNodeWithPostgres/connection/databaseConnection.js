const { Client } = require('pg');
const app = require('../route/itemRoute');

const db = new Client({
    host: '127.0.0.1', // localhost
    port: 5432,
    user: 'giovmahe',
    password: '123123123',
    database: 'note'
})

db.connect().then(() => { //promise
    console.log('Database is connected');
})
    .catch(err => {
        console.error(err);
    })

module.exports = app