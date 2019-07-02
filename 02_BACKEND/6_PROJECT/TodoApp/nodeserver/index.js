const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true});


const taskSchema = new Schema({
    title:  {type:String,required:true},
    status: Boolean,
    date: { type: Date, default: Date.now }    
  });

const Task = mongoose.model('Task', taskSchema);


server.use(express.static('build'))
server.use(bodyParser.urlencoded())
server.use(bodyParser.json())
server.use(cors());


server.post("/tasks",function(req,res){
    
    let t = new Task();
    t.title = req.body.title;
    t.status = req.body.status;
    t.save().then((doc)=>{
        res.json(doc);
    })

})   

server.get("/tasks",function(req,res){
    
 Task.find({}).then((docs)=>{
    res.json(docs);
 })


})   

server.get("/tasks/:id",function(req,res){
    
    Task.find({_id:req.params.id}).then((docs)=>{
       res.json(docs);
    })
   
   
   })   

server.put("/tasks/:id",function(req,res){
    
    console.log(req.body,req.params.id);
    Task.findOneAndUpdate({_id:req.params.id},req.body,{new:true}).then((docs)=>{
       res.json(docs);
    })
   
   
   })   

   server.delete("/tasks/:id",function(req,res){
    
    Task.findOneAndDelete({_id:req.params.id}).then((docs)=>{
       res.json(docs);
    })
   
   
   })   


server.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, './build/')});
  });

server.listen(8080,function(){
    console.log("server started");
})