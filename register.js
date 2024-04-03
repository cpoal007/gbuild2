// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPWizICk1Hfa5Sr9L_gMqYz-9xK7dnyp8",
  authDomain: "dummy12-11ede.firebaseapp.com",
  projectId: "dummy12-11ede",
  storageBucket: "dummy12-11ede.appspot.com",
  messagingSenderId: "249266607333",
  appId: "1:249266607333:web:9ea3a863d419137226700c",
  measurementId: "G-6EXX3GKKN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//inputs
const name = document.getElementById("email").value;
const password = document.getElementById("password").value;

//submit button
const submit = document.getElementById("submit");
submit.addEventListener("click",function(event){
    event.preventDefault();
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();

    //sign in with firebase auth
    auth.signInWithEmailAndPassword(email,password).then(user =>{
      alert("Logged in successfully");
    }).catch(err =>{
      alert(err.message);

    });
  });
  //sign up button
  btnsignup.addEventListener("click",e =>{
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    //sign in with firebase auth
    const promise = auth.createUserWithEmailAndPassword(email,password).then(user =>{
      alert("Signed up successfully");
    }).catch(err =>{
      alert(err.message);

    });

  });