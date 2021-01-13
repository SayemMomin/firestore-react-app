import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDejPX5DYWqiOdn8ZXRNcfwIgT3Sb8bt9c",
    authDomain: "firestore-react-app.firebaseapp.com",
    projectId: "firestore-react-app",
    storageBucket: "firestore-react-app.appspot.com",
    messagingSenderId: "786640297185",
    appId: "1:786640297185:web:258470e06b999bdf4deba0"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;