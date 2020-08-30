import firebase from'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAP0Kqaze-JHzwKe67hp7tSWyK9wGOEfeU",
  authDomain: "smarterp-62a2c.firebaseapp.com",
  databaseURL: "https://smarterp-62a2c.firebaseio.com",
  projectId: "smarterp-62a2c",
  storageBucket: "smarterp-62a2c.appspot.com",
  messagingSenderId: "726085574428",
  appId: "1:726085574428:web:2e1900154f95a1297564d9",
  measurementId: "G-2CH3DKNL7V"
};

  firebase.initializeApp(firebaseConfig);
  //export const db=firebase.firestore();

  export default firebase;

