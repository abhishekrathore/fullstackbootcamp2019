const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require('cors');

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/photogram', {useNewUrlParser: true});


const photoSchema = new Schema({
    title:  {type:String,required:true},
    desc: {type:String,required:true},
    image: {type:String,required:true},
    uid:{type:String,required:true}
  });

const Photo = mongoose.model('Photo', photoSchema);


server.use(express.static('build'))
server.use(bodyParser.urlencoded())
server.use(bodyParser.json())
server.use(cors());


server.post("/photo",function(req,res){
    
    let photo = new Photo();
    photo.title = req.body.title ;
    photo.desc = req.body.desc ;
    photo.uid = req.body.uid ;
    photo.image = req.body.image ;
    photo.save().then((doc)=>{
        res.json(doc);
    })

})   

server.get("/photos",function(req,res){
    
 Photo.find({uid:req.query.uid}).then((docs)=>{
    res.json(docs);
 })

})   






server.listen(8080,function(){
    console.log("server started");
})