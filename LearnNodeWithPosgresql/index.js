require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const rootRoute = require('./route/rootRoute')
const itemRoute = require('./route/itemRoute')

app.use(rootRoute, itemRoute)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})