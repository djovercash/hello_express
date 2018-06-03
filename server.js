const express = require('express')

var app = express();

app.get('/', (req, res) => {
  // res.send("<h1>Hello Express!</h1>")
  res.send({
    name: "Drew",
    likes: ["Singing", "Hiking", "Coding"]
  })
})

app.listen(3000)
