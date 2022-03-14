// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcPaLqEStR5gOXDskLTg7vc4VoMVB9yCg",
  authDomain: "lcalt1-61ef3.firebaseapp.com",
  databaseURL: "https://lcalt1-61ef3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lcalt1-61ef3",
  storageBucket: "lcalt1-61ef3.appspot.com",
  messagingSenderId: "63414889076",
  appId: "1:63414889076:web:7bf5226366d1f735763f21",
  measurementId: "G-2XMQJN2X6R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const myDB = firebase.database().ref("/users");

const btn2 = document.getElementById("submit");
btn2.addEventListener("click",insertRecord);

function insertRecord() {
  alert("Submit clicked!");
  
  const emailBox = document.getElementById("email");
  const emailBoxValue = emailBox.value;
  emailBox.value = "";
  emailBox.focus();
  
  const commentBox = document.getElementById("comment");
  const commentBoxValue = commentBox.value;
  commentBox.value = "";
  commentBox.focus();


const data = myDB.push();
data.set({email:emailBoxValue, comment:commentBoxValue})

}
