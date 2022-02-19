import * as firebase from 'firebase/app';
import 'firebase/storage'; //Image storage
import 'firebase/firestore'; //Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXuJwaOa1O3ZaJno1fYYx_KF9Iy17j_hE",
  authDomain: "react-gallery-c5f36.firebaseapp.com",
  databaseURL: "https://react-gallery.firebaseio.com",
  projectId: "react-gallery-c5f36",
  storageBucket: "react-gallery-c5f36.appspot.com",
  messagingSenderId: "766945679443",
  appId: "1:766945679443:web:2ca68a7e2be73e73c0cea6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore }