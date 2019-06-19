# Firebase with React


We can use Firebase Cloud services with React applications for purpose of Authentication,Database,Hosting and other firebase services. You will need to create a firebase account (same as your google account).

## Setup your project in Firebase Console

1. In firebase console, create a new project (or use any already available project you have).

2. Click on the project and you will see a dashboard. Click on the authentication menu item.

![Image 1](./images/1.png)

3. Click on Sign-in Method Tab under the authentication page.You will get a list of possible sign in methods you can integrate using Firebase authentication service.

![Image 2](./images/2.png)

4. In this example we will use Google Login. So click on Google to Enable it. You will see a switch to `enable` - then use `save` button to save the settings.

![Image 3](./images/3.png)

5. Now you can see Google login method is coming as `enabled`.

![Image 4](./images/4.png)

6. Next go to `Project Setting` Link, near the `Project Overiew`.

![Image 5](./images/5.png)

7. In that tab you can go to `your apps` section and click on a new web app.

![Image 6](./images/6.png)

8. You will get a prompt to create a new web application. Enter name of your web project and save the settings.

![Image 7](./images/7.png)

9. Finally you will get some config code for your application. This code you will use later in your React application to connect it to firebase project. This config will be different for every project.

![Image 8](./images/8.png)


```js
  var firebaseConfig = {
    apiKey: "AIzaSyAbP3iImORuopOyZ0xE5pq22SXqpX_OQXI",
    authDomain: "todolist-b8360.firebaseapp.com",
    databaseURL: "https://todolist-b8360.firebaseio.com",
    projectId: "todolist-b8360",
    storageBucket: "todolist-b8360.appspot.com",
    messagingSenderId: "734587731550",
    appId: "1:734587731550:web:71c18a5aa6e9ac06"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

```

10. Also don't forget to save support email in `project setting`. Else you will get an error in Login.

![Image 9](./images/9.png)





## Using Firebase in React App

### Install firebase 

To install firebase to your react project use `npm`

```bash
npm install firebase

```

### Import Firebase to React

After installation use `import` to include firebase common library in your file.

```js
import * as firebase from "firebase/app";

```

For including any service for firebase you have to import each of them individually.

For including Authentication, use

```js
import "firebase/auth";
```

### Setup Config of Firebase to React Project

After importing proper libraries you can paste the code you got during firebase project setup in your file. This will initialize the firebase app with your firebase project. (Example here is linking it to project `listapp-8ecb7`)


```js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";

// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLPTwvU2qYjQ_355JwJEtJW2KfDhfjzhA",
  authDomain: "listapp-8ecb7.firebaseapp.com",
  databaseURL: "https://listapp-8ecb7.firebaseio.com",
  projectId: "listapp-8ecb7",
  storageBucket: "listapp-8ecb7.appspot.com",
  messagingSenderId: "210208979505",
  appId: "1:210208979505:web:6fda6f3fcce4abd8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


```

## Using Google Authentication in React

Create a function in your React Component Class. This function is creating a provider for Google Sign-in services. You can change the type of provider and also use any other Authentication. Refer to firebase documentation for other providers.

```js
 googleLogin(){
    var provider = new firebase.auth.GoogleAuthProvider();


    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user.displayName,user.email);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
```

You can call above function from anywhere in `render` method. You can call it from a button - and use Google themed buttons to make it look like Google Login.

In case of successful sign-in `.then()` will be called , you will get user info inside user variable :

```js
      console.log(user.displayName,user.email);
```
In case of error in sign-in `.catch()` will be called, you will get error info inside error variable


For log out you can create a similar function :

```js

logout(){
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    }).catch(function(error) {
    // An error happened.
    });
}

```


For checking if user is already signed in (session is maintained) :

```js

checkLogin(){
   firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});
}

```

You can use above function to `redirect` user directly from login page to inside application - if user was already logged in. You will generally call this function on ComponentMount or route change events.