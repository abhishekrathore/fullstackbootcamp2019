# Using API with React


We can use API in React using either built-in browser function `fetch` or libraries like `axios`. In following discussion we will use `axios` as our main API calling client.


## Axios

Axios is a  Promise based HTTP client for the browser and node.js

### Setup 

```bash
npm install axios

```

import `axios` and in file to use.


### API Calls


* **GET** request :

```js
 axios.get('http://localhost:8080/tasks')
 .then((res)=>{
     //do something with response
 })
```

* **POST** request :

```js
 axios.post('http://localhost:8080/task',data)
 .then((res)=>{
     //do something with response
 })
```

* **PUT** request :

```js
 axios.put('http://localhost:8080/task/123',data)  // assuming 123 is id of task record
 .then((res)=>{
     //do something with response
 })
```

* **DELETE** request :

```js
 axios.delete('http://localhost:8080/task/123') // assuming 123 is id of task record
 .then((res)=>{
     //do something with response
 })
```