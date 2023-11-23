type="module"
   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
   import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
   import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
 
   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
  apiKey: "AIzaSyBV7qJQtsJliJ3yg-KljLqnLgkOGBFqFG0",
  authDomain: "topsy-1.firebaseapp.com",
  databaseURL: "https://topsy-1-default-rtdb.firebaseio.com",
  projectId: "topsy-1",
  storageBucket: "topsy-1.appspot.com",
  messagingSenderId: "645959424865",
  appId: "1:645959424865:web:efd955e58bad8b8dc60320",
  measurementId: "G-FKXFJDBX7F"
};
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const database = getDatabase(app);
   const auth = getAuth();
   const signUpButton = document.getElementById('signUp');
   signUpButton.addEventListener('click', signUp);

   function signUp() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      var username = document.getElementById('username').value;

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          set(ref(database, 'users/' + user.uid),{
            username: username,
            email: email
          })
          alert('User Created!');
          location.replace("Product.html")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert('Enter Valid Credentials');
        });
   }
   
 