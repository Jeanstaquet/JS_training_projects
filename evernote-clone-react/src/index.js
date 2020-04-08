import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require("firebase")
require("firebase/firestore")

firebase.initializeApp({
  apiKey: "AIzaSyBajW2gSO7y9pSaFmPFVFqgbq1BKu4-gas",
  authDomain: "evernote-clone-a2db3.firebaseapp.com",
  databaseURL: "https://evernote-clone-a2db3.firebaseio.com",
  projectId: "evernote-clone-a2db3",
  storageBucket: "evernote-clone-a2db3.appspot.com",
  messagingSenderId: "101179934358",
  appId: "1:101179934358:web:fa09e81a3383ef4d87a4b7",
  measurementId: "G-W6E8BFWKM8"
});
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
