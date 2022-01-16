//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB7K8923gnKqcW6M_oolLPhXRGeMV98w-k",
      authDomain: "kwitter-332c8.firebaseapp.com",
      databaseURL: "https://kwitter-332c8-default-rtdb.firebaseio.com",
      projectId: "kwitter-332c8",
      storageBucket: "kwitter-332c8.appspot.com",
      messagingSenderId: "464869478059",
      appId: "1:464869478059:web:7d07a659e99f4044ac31ee"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
