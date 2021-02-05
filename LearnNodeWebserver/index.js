// for take library express
const express = require('express')
// define pp is express function -> method require
const app = express()
// make port 3000. 
const port = 3000

app.use(express.static('views'))
app.set('view engine', 'ejs')

const rootRoute = require('./route/rootRoute')
app.use(rootRoute)

// port as a gate browser to computer
app.listen(port, () => {
  // if there are no console log -> wont display anything
  // console log -> when server express ready to display request
  console.log(`Example app listening at http://localhost:${port}`)
})