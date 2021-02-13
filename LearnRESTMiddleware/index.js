const express = require('express')
const app = express()
const port = 3000

//built in middleware, agar body bisa ter decode
//dideklarasikan sebelum rute-rute yg kita buat
app.use(express.json())

const rootRoute = require('./route/rootRoute')
const itemRoute = require('./route/itemRoute')

//route level middleware
//middleware khusus menampung rute-rute
app.use(rootRoute, itemRoute)

//error handler middleware
app.use(function (error, req, res, next) {
    //console.log(error)
    res.status(500).send(error.massage)
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})