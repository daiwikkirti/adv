
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCFK61Sfc3sID_HQ2LDSTubbz56u31uCrI",
      authDomain: "kwitter-a8173.firebaseapp.com",
      projectId: "kwitter-a8173",
      storageBucket: "kwitter-a8173.appspot.com",
      messagingSenderId: "817862363572",
      appId: "1:817862363572:web:37e04d1e3c5bd459168ae1"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
