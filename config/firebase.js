import * as firebase from 'firebase/app';
import 'firebase/database';
// import 'firebase/auth'; 

var firebaseConfig = {
    apiKey: "AIzaSyA_lA9D333jXThThZtXGE6V-K-Z9ki3ezA",
    authDomain: "todo-app-db0b6.firebaseapp.com",
    databaseURL: "https://todo-app-db0b6.firebaseio.com",
    projectId: "todo-app-db0b6",
    storageBucket: "todo-app-db0b6.appspot.com",
    messagingSenderId: "853407518212",
    appId: "1:853407518212:web:c0f004f82179d64b5f2f51",
    measurementId: "G-NT9J685CVQ"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);