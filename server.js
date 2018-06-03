const express = require('express')

var app = express();

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  // res.send("<h1>Hello Express!</h1>")
  res.send({
    name: "Drew",
    likes: ["Singing", "Hiking", "Coding"]
  })
})

app.get('/about', (req, res) => {
  res.send("<h2>About Page</h2>")
})

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: "Unable to complete this request"
  })
})

app.listen(3000)
