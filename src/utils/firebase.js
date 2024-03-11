// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwd4umDOzcw6ZAHfuMn4yp6Z39dkuZI2w",
  authDomain: "netflixgpt-768cc.firebaseapp.com",
  projectId: "netflixgpt-768cc",
  storageBucket: "netflixgpt-768cc.appspot.com",
  messagingSenderId: "973642816188",
  appId: "1:973642816188:web:bd14d6e29adc01b9038eb9",
  measurementId: "G-03VWJHTXRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);