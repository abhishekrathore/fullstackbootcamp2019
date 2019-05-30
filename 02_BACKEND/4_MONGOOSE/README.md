# Mongoose

Mongoose is an ODM (ORM) which can be used with NodeJS/Express environment to setup a Relational Model of Data on top of MongoDB.

You can checkout mongoose documentation [Here](https://mongoosejs.com/)

## Setup

You can install mongoose using npm :

```bash
npm install mongoose
```

After setup, you can import mongoose to your project :

```js
const mongoose = require("mongoose");
```

## Connection to Database

To connect mongoose to your database `test`, you have to use the following commands :

```js

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
``` 

Connection can also be stored in a variable to check whether it is connected properly or not. Also to disconnect database later on. You can read more details [Here](https://mongoosejs.com/docs/connections.html)

## Schema

Schema is the specification according to which data object is created in Database.

`taskSchema` which contains `title`, `status`, `date` fields. So every task object saved in database will have these 3 fields according to Schema given


```js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title:  String,
    status: Boolean,
    date: { type: Date, default: Date.now }    
  });
```

Many types of data are allowed in Mongoose Schema. The common SchemaTypes are:

* String
* Number
* Date
* Boolean
* Mixed
* ObjectId
* Array

You can put a lot of conditions inside the Schema object :

```js

    age: { type: Number, default:18, min: 18, max: 65, required :true }
    // default value of Number is 18 and should be between 18-65, and can't be null or empty

```

Detailed information on SchemaTypes is [Here](https://mongoosejs.com/docs/schematypes.html)

## Model

Model are similar to classes, they create a Class from Schema. These classes(i.e Models) can be used to create each new database object.


```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title:  String,
    status: Boolean,
    date: { type: Date, default: Date.now },    
  });
  
const Task = mongoose.model('Task', taskSchema);  //Task Model to create new database objects for `tasks` Collection


```

### Lab Task 1

Connect mongoose to a database named `todolist` if you don't have a database with this name. Mongoose will create it after you perform any insert operation.

Creata a Schema named `taskSchema` and model named `Task` as shown above.


## CRUD in Mongoose

### Create - new objects

To Create new obejct in database we can use `new` keyword and create an object from Model. We can use `save()` function to save the object in database. Unless, you call save function - the object remains in memory. If your collection not yet created in MongoDB, it will created with name of Model pluralized (e.g Task will make a collection named `tasks`)


```js

server.post("/task",function(req,res){
    let task = new Task();

    task.title = "shopping";
    task.status = true;
    task.date = new Date();

    task.save();
})

```

### Lab Task 2

You have to create an API Endpoint to type `POST` named `/task`. It will create a new task item in database whenever called properly. All 3 fields `title`, `status`, `date` must be mandatory (`required`). If someone is not passing all fields properly, no database entry should be created.

```js
//request body :

{
    "title" : "task1",
    "status" : true,
    "date" :'2010-05-30"     

}

// response body should return the newly created object.

res.json(task);

```

Check using any tool that new record in database is created. Also check name of collection. Is is `tasks` ?


### Read objects

To read new obejcts from database, one can use `find` query or similar queries. `find` queries also contain some conditions which can restrict what kind of data objects you want to read from database.


```js

server.get("/task/:name",function(req,res){
    Task.findOne({name:req.params.name},function(err,doc){
        console.log(doc)  // this will contain db object
    })
})


server.get("/tasks",function(req,res){
    Task.find({},function(err,docs){
        console.log(docs)  // this is an array which contains all task objects
    })
})


```


### Lab Task 3

You have to create an API Endpoint to type `GET` named `/tasks`. It will return all task available in collection `tasks`.

```js
//request is GET so no data in body :


// response body should return the all db objects of collection tasks.

res.json(tasks);

```

Check if all records are returned in response. How you will change this API to make it return only one database record in which `title` is matched with `title` sent in request `query`.



### Update - existing objects

To Update an existing object in database we need to first find an object from database and then update in database. This might be considered as a combination of `find` and `save` methods.


There are generally 2 cases in update :

1. Updating all values and overwriting the object properties completely.
2. Updating only few values by setting their new values.


First scenario is covered using this query. Here you are overwriting all properties and resulting object will only have `name` property.

```js

server.put("/task/:name",function(req,res){
    Task.findOneAndUpdate({name:req.params.name},{name:'YouStart'},{overwrite:true},function(err,doc){
        console.log(doc)  // this will contain db object
    })
})

```

Second scenario is covered using this query. Here you are only changing value of `name` property in existing object without changing other values in Object.

```js

server.put("/task/:name",function(req,res){
    Task.findOneAndUpdate({name:req.params.name},{$set:{name:'YouStart'}},function(err,doc){
        console.log(doc)  // this will contain db object
    })
})

```

Latest version of mongoose puts $set as default for first level keys of object. To avoid $set and to use overwrite one must put `{overwrite:true}`


### Lab Task 4

You have to create an API Endpoint to type `PUT` named `/task/:id`. It will update existing task item in database which has ObjectId set to `id` you have passed. 

```js
//request params will have id in URL path :

{
    "title" : "task-changed",
}

// response body should return the newly updated object.

res.json(task);

```

Check using any tool that only `title` of record in database is changed. All other properties remain the same.



### Delete - existing objects

To Delete existing obejct from database we need to first find an object from database and then delete. This might be considered as a combination of `find` and `remove` methods.


```js

server.delete("/task/:name",function(req,res){
    Task.findOneAndDelete({name:req.params.name},function(err,doc){
        console.log(doc)  // this will contain deleted object object
    })
})

```


### Lab Task 5

You have to create an API Endpoint to type `DELETE` named `/task/:id`. It will delete existing task item in database which has ObjectId set to `id` you have passed. 

```js
//request params will have id in URL path :

// response body should return the deleted object.

res.json(task);

```

Check using any tool that the record is deleted or not.


## Additional Resources

Queries in Mongoose : [Link](https://mongoosejs.com/docs/queries.html)