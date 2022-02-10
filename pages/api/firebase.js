import firebase from 'firebase/app'

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBVWN12CmHRcVQuAgrUzZuqX2XAt9fKJAY",
    authDomain: "kalify-alogarapa.firebaseapp.com",
    projectId: "kalify-alogarapa",
    storageBucket: "kalify-alogarapa.appspot.com",
    messagingSenderId: "707708876227",
    appId: "1:707708876227:web:b22fe58601eec8b0e9f976",
    measurementId: "G-RC3MV7WFV4"
  };

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database } 