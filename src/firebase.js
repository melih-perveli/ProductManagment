import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyCNOluvNmNlQbdL0UKo3mph8Ng6AbqHypM",
  authDomain: "asttasarim-58f2e.firebaseapp.com",
  projectId: "asttasarim-58f2e",
  storageBucket: "asttasarim-58f2e.appspot.com",
  messagingSenderId: "813150983787",
  appId: "1:813150983787:web:4f047bfb029bf83081432e",
  measurementId: "G-L1EG6G7973",
  databaseURL:
    "https://asttasarim-58f2e-default-rtdb.europe-west1.firebasedatabase.app/",
};

firebase.initializeApp(config);

export default firebase.firestore();
