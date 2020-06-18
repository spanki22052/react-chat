import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyB7m6cqCTLtVpulRAIMW1DYG_OoI_Gu_oM",
  authDomain: "react-chat-app-1d622.firebaseapp.com",
  databaseURL: "https://react-chat-app-1d622.firebaseio.com",
  projectId: "react-chat-app-1d622",
  storageBucket: "react-chat-app-1d622.appspot.com",
  messagingSenderId: "555189825204",
  appId: "1:555189825204:web:b2b527c7ede4e20f2271e1",
  measurementId: "G-KFCM6E9959",
});

ReactDOM.render(
  <React.StrictMode>
    <h1>Hello world</h1>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
