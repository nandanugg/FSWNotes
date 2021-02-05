// to take from library express
const express = require('express')
// define app as function express -> method require
const app = express.Router()

let counter = 1

app.get('/', (req, res) => {
  counter++
  res.render('index', {counter: counter, 
    isMorning: true,
    names: ['Katlyn', 'Maegan', 'providenci']
  })
})

// app.get('/:path', (req, res) => { res.render(req.params.path)})

// app.get('/about', (req, res) => {
//   res.render("about")
// })

// app.get('*', (req, res) => {
//   res.render("404")
// })

app.get('/:path', (req, res) =>{
  res.render(req.params.path, {}, (err, html)=>{
    if (err){
      res.sender('404')
    }else{
      res.send(html)
    }
  })
})

    // console.log(req.params);
    // res.send('wait cuy')
    // res.sendFile(`.${req.params.path}.html`)
    // res.sendFile('about.html')


module.exports = app 