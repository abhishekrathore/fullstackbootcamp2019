
# Express Middlewares

Middlewares are functions which are placed between request and response path and transform the request object data in some way.

Middleware is always applied in a sequence, some of the application level middlewares are :

- Static Middleware (express.static) : Used to create static web hosting on your node server (similar to http-server module)
- Logging Middleware (morgan) : Used to show server request and response logs.
- Compression Middlewares (compress) : Used to compress response of server
- Session Middleware (express-session) : For creating user session variables on server.
- Authentication Middleware (passportjs) : For checking authentication user

Middleware can also exist in other forms like 'routing middlewares' but that we will encounter later on.

## Static Middleware

Let check out an example of `static` middleware. This is used for creating a static hosting of files. So when you have to serve - HTML, CSS, frontend JS. Images and other static resources - you can put them in a hosted directory (public directory)

```javascript

const express = require("express");
const server = express();

server.use(express.static('public'));
server.get("/demo",function(req,res){
    res.send("hello");
})
server.listen(8080,function(){
    console.log("server started")
})

```

This example shows `public` directory is now hosted and we can put static content in that. Now you can put any file in `public` folder and it can be access by  prefixing it with server name.

Example : suppose you have a file `demo.png` in `public` folder it can be accessed by `http://localhost:8080/demo.png` URL in browser or postman.


### Lab Task 1

Create a `public` folder with static middleware as shown above.

1. Host your `react` project (after build) inside this `public` folder. To check if you have done it properly. Your react app must open on `http://localhost:8080` 



## BODY PARSER

Body Parser is an in-built middleware in express framework. It is used to convert `request` body into JSON object.


```js 
const bodyParser = require("body-parser") // No need to install if you have installed express

const server = express();

server.use(bodyParser.json());   // for JSON data body
server.use(bodyParser.urlencoded({ extended: false }))  // for urlencoded data body

```

### Lab Task 2

Use POSTMAN to send some `raw` body data with `json` format. You can send as show in below screen

![POSTMAN body data](./images/1.png)

1. Make use of body parser middleware. 
2. Build an API endpoint of type POST and path `login` to test the data is received properly inside the API in `req.body` object.
3. Send `req.body` back to browser using `res.json()` function.


## LOGGER

HTTP request logger middleware for node.js. Named after Dexter, a show you should not watch until completion.

First install morgan

```shell
npm install morgan
```

Use it in you Express server as middleware.

```js

const morgan = require('morgan')  // after installing

server.use(morgan('tiny'));
```

### Lab Task 3

You will notice that on each request you are getting lots of logs in your console. Check out what info is given in the logs. Change the value of `tiny` and replace with  `combined`, `common` and `dev` and check out put logs every time.


## SESSION

Session middleware is used to store session variable for each user on server side. This middleware can make use of any data storage depending on settings. By default it stores session variables in Memory (RAM).

First install express-session middleware

```shell
npm install express-session
```

Now you can use it in your express server

```js
var server = express()
const session = require('express-session')


server.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }   // make secure : true incase you are using HTTPS
}))

```

Now you can use `req.session` object to store any value for a particular user in server session. This value will not interact with similar variable of other users.

```js

server.get('/user', function(req, res) {
  if (req.session.views) {
    req.session.views++
    res.json({views:req.session.views})
  } else {
    req.session.views = 1
    res.send('welcome to the session demo. refresh!')
  }
})

```


### Lab Task 4

In above example we are intializing a variable session of each user. Write similar code in your server

1. Checkout if its value increases every time you refresh the page. 
2. What happens when you open URL in another tab.
3. What happens when you open URL in anothe browser