import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyAjwzn-SMtXLc8UzqODjmjn4yNakdItBh0",
    authDomain: "aaa-banking-syetem.firebaseapp.com",
    databaseURL: "https://aaa-banking-syetem-default-rtdb.firebaseio.com",
    projectId: "aaa-banking-syetem",
    storageBucket: "aaa-banking-syetem.appspot.com",
    messagingSenderId: "10766947918",
    appId: "1:10766947918:web:24e7e21c56484425be151f",
    measurementId: "G-5BVGF59MMS"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
