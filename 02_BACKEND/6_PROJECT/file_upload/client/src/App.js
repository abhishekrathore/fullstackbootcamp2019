import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import * as firebase from 'firebase/app';

import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDDvbCITGxjpTV2QDBWJQUtd1_vqxwk2mg",
  authDomain: "fir-data-e7a39.firebaseapp.com",
  databaseURL: "https://fir-data-e7a39.firebaseio.com",
  projectId: "fir-data-e7a39",
  storageBucket: "fir-data-e7a39.appspot.com",
  messagingSenderId: "17046921840",
  appId: "1:17046921840:web:edeea3c0dedff6bf"
};
firebase.initializeApp(firebaseConfig);


class App extends React.Component{


  fileUpload(e){
   console.log(e.target.files[0])
  let fd = new FormData()
  fd.append("avatar",e.target.files[0])

   axios.post("http://localhost:8080/profile",fd,{headers:{
    'Content-Type': "multipart/form-data"
  }})
  }

  fileUploadFirebase(e){
    console.log(e.target.files[0])
    var storageRef = firebase.storage().ref();
    
    // Create a reference to 'images/mountains.jpg'
    var mountainImagesRef = storageRef.child('images/mountains.jpg');
 
    mountainImagesRef.put(e.target.files[0]).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    });
   }

  render(){
    return (<div>
      <input type="file" onChange={(e)=>{this.fileUploadFirebase(e)}}></input>
    </div> );
  }
  
}

export default App;
