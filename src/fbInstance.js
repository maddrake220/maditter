import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
/*
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSEEAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
*/
const firebaseConfig = {
  apiKey: "AIzaSyDU38Ar8ioBY3qscYk4D-poTMbflkBIKSQ",
  authDomain: "maditter-9e9d0.firebaseapp.com",
  projectId: "maditter-9e9d0",
  storageBucket: "maditter-9e9d0.appspot.com",
  messagingSenderId: "168707011353",
  appId: "1:168707011353:web:dbe75844f0befdd76f8b88",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();

export const dbService = firebase.firestore();

export const storageService = firebase.storage();
