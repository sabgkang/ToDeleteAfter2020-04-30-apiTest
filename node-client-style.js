//const http = require('http');
//const url = require('url');

var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');


var firebaseConfig = {
  apiKey: "AIzaSyAhr69v1SCFW5mwzfv-qfMA6xL0IhKHNrc",
  authDomain: "webchallenge-c16eb.firebaseapp.com",
  databaseURL: "https://webchallenge-c16eb.firebaseio.com",
  projectId: "webchallenge-c16eb",
  storageBucket: "webchallenge-c16eb.appspot.com",
  messagingSenderId: "372130663533",
  appId: "1:372130663533:web:d73219272c0b4faf7f8364",
  measurementId: "G-LZ3DN86LX1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//var isLogin = false;
//firebase.auth().onAuthStateChanged(function (user) {
//  //console.log(user);
//  if (user == null) {
//    // not login
//    console.log("no login");
//    console.log(firebase.auth().currentUser);
//    //isLogin = false;
//  } else {
//    // login
//    console.log(user.email, " login");
//    //isLogin = true;
//
//    // Set  
//        database.ref('sandbox').set({
//          Test: JSON.stringify("aaa"),
//        }, function (error) {
//          if (error) {
//            console.log("Write to database error");
//          } else {
//            console.log('Write to database successful');
//          };
//        });
//
//  }
//});


firebase.auth().onAuthStateChanged(function (user) {
  //console.log(user);
  if (user == null) {
    // not login
    console.log("no login");
  } else {
    // login
    console.log(user.email);
  }
});


firebase.auth().signInWithEmailAndPassword("aaa@test.com", "aaaaaa").catch(function (error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(error);
});

var database = firebase.database();

//// Read is OK
database.ref('sandbox').once('value').then(function (snapshot) {
  console.log("sandbox read done");
  var result = snapshot.val();
  var data = JSON.parse(result.Test);
  console.log(data);
});

// Set after 1 second, waiting for signIn complete
setTimeout(function () {
  database.ref('sandbox').set({
    Test: JSON.stringify("bbb"),
  }, function (error) {
    if (error) {
      console.log("Write to database error");
    } else {
      console.log('Write to database successful');
    };
  });
});