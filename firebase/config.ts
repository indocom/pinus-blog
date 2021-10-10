import * as firebase from "firebase/app";
import "firebase/auth";
import { reduxFirebase } from "react-redux-firebase";

const config = {
  // Production
  apiKey: "AIzaSyC5oWVtiTYbTFs24Qj8SU9s1CzTTdOHR9Y",
  authDomain: "pinus-blog.firebaseapp.com",
  projectId: "pinus-blog",
  storageBucket: "pinus-blog.appspot.com",
  messagingSenderId: "637702985614",
  appId: "1:637702985614:web:63dabe8ef3ac1e296736df",
  measurementId: "G-98NY16FSY7"
};

export function initFirebase(): firebase.FirebaseApp {
  return firebase.initializeApp(config);
}