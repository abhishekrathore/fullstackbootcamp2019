import React from 'react';

import Login from './Login';
import BlogDetail from './BlogDetail';
import BlogList from './BlogList';
import BlogAdd from './BlogAdd';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {Menu} from 'antd';
import 'antd/dist/antd.css';
import * as firebase from "firebase/app";
import 'firebase/auth';
import axios from 'axios';

var firebaseConfig = {
  apiKey: "AIzaSyC34tvNrhbK9W51d3LDjiZKLsL_3D4lA44",
  authDomain: "bookshare-47798.firebaseapp.com",
  databaseURL: "https://bookshare-47798.firebaseio.com",
  projectId: "bookshare-47798",
  storageBucket: "bookshare-47798.appspot.com",
  messagingSenderId: "161714986925",
  appId: "1:161714986925:web:d935c063090dae1e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends React.Component{
 
  constructor(props){
    super(props)
    this.state = {}
    this.state.db = {
     blogs :[]
    }
  }

  componentDidMount(){
    this.checkLogin();
  }

  getBlogs(){
    axios.get("http://localhost:8080/blogs?uid="+this.state.user.uid).then(
      (res)=>{
        let db = this.state.db;
        db.blogs = res.data;
        this.setState({
          db:db
        })

      }
    )
  }

  googleLogin(){
    var provider = new firebase.auth.GoogleAuthProvider();


    firebase.auth().signInWithPopup(provider).then((result) =>{
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      this.setState(
        {user:user}
      )
      this.props.history.push("/blogs");

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



  addBlog(blog){
    let db = this.state.db;
    blog.uid = this.state.user.uid;
    axios.post('http://localhost:8080/blog',blog).then(
      (res)=>{

              db.blogs.push(res.data)
              console.log(db.blogs)
          this.setState(
            {db}
          )

          this.props.history.push("/blogs")
      }
    )
    

  }

  checkLogin(){
    firebase.auth().onAuthStateChanged((user) => {
   if (user) {
    this.setState(
      {user:user}
    )
    this.getBlogs();

   } else {
     // No user is signed in.
   }
 });
 }

 logout(){
  firebase.auth().signOut().then(()=> {
    this.setState(
      {user:null}
    )
    this.props.history.push("/")
  }).catch(function(error) {
  // An error happened.
  });
}


  render(){
    return (
      <div>
        {this.state.user ?   <Menu mode="horizontal">
        <Menu.Item key="mail">
          <Link to="/blogs">Blogs</Link>
        </Menu.Item>
        <Menu.Item key="app">
        <Link to="/add">Add Blog</Link>
        </Menu.Item>
        <Menu.Item key="logout" onClick={this.logout.bind(this)}>
        Log Out
        </Menu.Item>
      </Menu>:null}
    

        <Route path="/" exact render={()=><Login googleLogin={this.googleLogin.bind(this)}></Login>}></Route>
        <Route path="/add" render={()=><BlogAdd addBlog={this.addBlog.bind(this)}></BlogAdd>}></Route>
        <Route path="/blogs" render={()=><BlogList db={this.state.db}></BlogList>}></Route>
        <Route path="/blogdetail/:id" render={(props)=><BlogDetail  {...props}  db={this.state.db}></BlogDetail>}></Route>
      </div>
    );
  }
 
}

export default App;
