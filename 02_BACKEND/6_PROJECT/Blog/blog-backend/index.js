const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require('cors');


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true});


const blogSchema = new Schema({
    title:  {type:String,required:true},
    desc:  {type:String,required:true},
    image:  {type:String,required:true},   
    uid:  {type:String,required:true}
  });

const Blog = mongoose.model('Blog', blogSchema);


server.use(bodyParser.urlencoded())
server.use(bodyParser.json())
server.use(cors());


server.post("/blog",function(req,res){
    
    let b = new Blog();
    b.title = req.body.title;
    b.desc = req.body.desc;
    b.image = req.body.image;
    b.uid = req.body.uid;
    b.save().then((doc)=>{
        res.json(doc);
    })

})   

server.get("/blogs",function(req,res){
    
 Blog.find({uid:req.query.uid}).then((docs)=>{
    res.json(docs);
 })


})   


server.listen(8080,function(){
    console.log("server started");
})