import {signInWithEmailAndPassword, 
  GoogleAuthProvider,signInWithPopup  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";



const form = document.querySelector("#form")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const googlebtn = document.querySelector("#google")


// form.addEventListener('submit' , (event)=>{
//     event.preventDefault();
    form.addEventListener('submit' , (event) => {
            event.preventDefault();

    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
  
    const user = userCredential.user;
    console.log(user);
   window.location= "home.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
   
})

//google authentication
const provider = new GoogleAuthProvider();
googlebtn.addEventListener("click",(event)=>{
  event.preventDefault()

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user; 
    console.log(user);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);  
    console.log(errorMessage);
  });
})

