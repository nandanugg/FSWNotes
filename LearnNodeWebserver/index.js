const express = require('express')
const app = express() //mengisi app dengan function express(), dan app itu punya bbrp method yg brasal dari library express
const port = 3000

app.use(express.static('views'))
app.set('view engine', 'ejs')

const rootRoute = require('./route/rootRoute')
app.use(rootRoute)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//jika ingin menjalankan kode diatas
//gunakan npm start, dimana start memiliki nilai
//default node index.js