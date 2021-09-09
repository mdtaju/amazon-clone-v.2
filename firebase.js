// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyADJswA5jNOXpv8-8WT1Cv8cAK8DHFfVRM",
    authDomain: "ama-zon-by-tajuuddin.firebaseapp.com",
    projectId: "ama-zon-by-tajuuddin",
    storageBucket: "ama-zon-by-tajuuddin.appspot.com",
    messagingSenderId: "640508421853",
    appId: "1:640508421853:web:5a05e919570699bf23dd34",
    measurementId: "G-9G4PV5JH53"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();

  export default db;