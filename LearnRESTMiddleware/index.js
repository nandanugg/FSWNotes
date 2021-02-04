const { Router } = require("express")
const express = require("express")
const app = express()
const itemRoute = require('./route/itemRoute')

//middleware 
app.use(express.json()) //bawaan express
app.use(itemRoute) //buat sendiri
// buatan sendiri menghandle error
app.use(function (error, req, res, next) {
    res.send(error.message)
})

const port = 3000
app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`);
})

