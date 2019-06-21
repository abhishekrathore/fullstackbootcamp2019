var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var cors = require('cors');
var fs = require('fs');
 
var app = express()
app.use(cors())
 
app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  console.log(req.file)
  // req.body will hold the text fields, if there were any
  res.json(req.file)

})

app.listen(8080,(req,res)=>{
    console.log("server started")
})