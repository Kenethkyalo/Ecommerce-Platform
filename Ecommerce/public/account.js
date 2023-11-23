type="module"
  
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
    import { getDatabase, update, ref } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
    import { FacebookAuthProvider,signInWithPopup, getAuth, signInWithEmailAndPassword , onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
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
    const provider = new FacebookAuthProvider();
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();
    signInWithPopup (auth, provider)
    .then((result) => {
      const user = result.user;
      const Credential = FacebookAuthProvider.CredentialFromResult(result);
      const accessToken = credential.accessToken;
    })
    .catch((error) => {
      const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = FacebookAuthProvider.credentialFromError(error);
    });
    Login.addEventListener('click',(e) => {
        var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
   

      
   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
const dt = new Date();

    update(ref(database, 'users/' + user.uid),{
      last_Login: dt,
     
    })
    alert('User Logged In!');
    alert('🎉Order Successful🎉✔')
    location.replace("preview.html")
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('Incorrect Email or Password');
  });
});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});  
logout.addEventListener('click', (e) =>{

    signOut(auth).then(() => {

        alert('User Logged Out!');
        
        
  // Sign-out successful.
}).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
    alert('errorMessage');
  // An error happened.
});

});
 
