const express = require('express')
const app = express()

const rootRoute = require('./route/rootRoute')
const itemRoute = require('./route/itemRoute')
app.use(rootRoute, itemRoute)
app.use(express.json())

const port = 3000
app.listen(port, () => {
    console.log(`server is listening on https://localhost:${port}`);
})