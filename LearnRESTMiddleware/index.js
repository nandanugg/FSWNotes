const express = require("express")
const app = express()
const itemRoute = require("./route/itemRoute")

app.use(express.json()) //middleware bawaan express
app.use(itemRoute) //middleware buatan sendiri
// middleware buatan sendiri untuk handle error
app.use(function (error, req, res, next) {
    res.send(error.message)
})

const port = 3000
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})
