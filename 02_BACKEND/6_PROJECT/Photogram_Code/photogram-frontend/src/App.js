import React from 'react';
import Add from './Add';
import Gallery from './Gallery';
import Login from './Login';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import * as firebase from "firebase/app";
import "firebase/auth";

import { Menu } from 'antd';
import axios from 'axios';


const firebaseConfig = {
  apiKey: "AIzaSyC34tvNrhbK9W51d3LDjiZKLsL_3D4lA44",
  authDomain: "bookshare-47798.firebaseapp.com",
  databaseURL: "https://bookshare-47798.firebaseio.com",
  projectId: "bookshare-47798",
  storageBucket: "bookshare-47798.appspot.com",
  messagingSenderId: "161714986925",
  appId: "1:161714986925:web:d935c063090dae1e"
};

firebase.initializeApp(firebaseConfig);

class App extends React.Component {

constructor(props){
  super(props)

  this.state = {}
  this.state.db = {
    photos : []
  }

}

componentDidMount(){
  this.checkLogin()

}

getPhotos(uid){
  axios.get("http://localhost:8080/photos?uid="+uid).then(
    (res)=>{
      let db = this.state.db;
      db.photos = res.data;
      this.setState({
        db:db
      })
      }
  )
}

checkLogin(){
  firebase.auth().onAuthStateChanged((user)=> {
 if (user) {
  this.setState(
    {user:user}
  )
  this.getPhotos(user.uid)
  this.props.history.push("/add");
 } else {
   // No user is signed in.
 }
});
}

addPhoto(photo){
let db  = this.state.db;
photo.uid = this.state.user.uid;

axios.post("http://localhost:8080/photo",photo).then(
  (res)=>{
      db.photos.push(res.data);
      console.log(db.photos);
      this.setState(
        {db:db}
      )
      this.props.history.push('/gallery')

  }
)




}

googleLogin(){
  var provider = new firebase.auth.GoogleAuthProvider();


  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    this.setState(
      {user:user}
    )
    this.props.history.push("/add");
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

logout(){
  firebase.auth().signOut().then(() =>{
  this.setState({
    user:null
  })
  this.props.history.push("/");
  }).catch(function(error) {
  // An error happened.
  });
}

render(){
  return (<div>

{this.state.user?<Menu mode="horizontal">
<Menu.Item key="mail">
  <Link to="/add">Add</Link>
</Menu.Item>
<Menu.Item key="app" >
<Link to="/gallery">Gallery</Link>
</Menu.Item>
<Menu.Item key="app" onClick={this.logout.bind(this)}>
Logout
</Menu.Item>
</Menu> :null }

  <Route path="/" exact render={()=><Login googleLogin={this.googleLogin.bind(this)}></Login>}></Route>
  <Route path="/gallery" render={()=><Gallery db={this.state.db}></Gallery>}></Route>
  <Route path="/add" render={()=> <Add savePhoto={this.addPhoto.bind(this)}></Add>}></Route>



  </div>)
}

 
   
}

export default App;
