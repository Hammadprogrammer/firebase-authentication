

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBAKgGcs6mwFrKEWQAXMGs6lU3_yJ0WEpI",
    authDomain: "social-app-fe58c.firebaseapp.com",
    projectId: "social-app-fe58c",
    storageBucket: "social-app-fe58c.appspot.com",
    messagingSenderId: "543787491606",
    appId: "1:543787491606:web:dc89cc5e50f5a00aa7b037",
    measurementId: "G-2TXY4BK82M"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
 