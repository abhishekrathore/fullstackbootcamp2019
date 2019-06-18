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

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {};
    this.loginCheck()

  }

  googleLogin(){
    var provider = new firebase.auth.GoogleAuthProvider();


    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      this.setState({
        user:user
      })
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

  loginCheck(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user:user
        })
        console.log("logged in",user)
      } else {
        console.log("logged out")
      }
    });
  }
  logOut(){
    firebase.auth().signOut().then(() => {
       this.setState({
         user:""
       })
      }).catch(function(error) {
      // An error happened.
      });
  }
  


  render(){
    return (<div>
        {this.state.user?
        <div>
          <p>{this.state.user.displayName}</p>
          <p>{this.state.user.email}</p>
          <img src={this.state.user.photoURL}></img>
        <button onClick={()=>{this.logOut()}}>Logout</button>
        </div> : <button onClick={()=>{this.googleLogin()}}>Login with Google</button>}
      </div>);
  }
 
}

export default App;
