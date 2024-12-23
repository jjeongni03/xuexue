// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeMdUyAt3D4C4u-2GT7XOVTT6gMYsI_I0",
  authDomain: "xuexue-d84a6.firebaseapp.com",
  projectId: "xuexue-d84a6",
  storageBucket: "xuexue-d84a6.appspot.com",
  messagingSenderId: "478320420240",
  appId: "1:478320420240:web:421606b689a38bb4d8ff15",
  measurementId: "G-JF6CNQ2E38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);