// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyDcmz67H-xCWcKCWWYet3N6sXJy1jiZ_GA",
  authDomain: "hotpot-auth.firebaseapp.com",
  projectId: "hotpot-auth",
  storageBucket: "hotpot-auth.appspot.com",
  messagingSenderId: "75272707915",
  appId: "1:75272707915:web:93c482b3089da62b8952ce",
  measurementId: "G-HVQHW1DD8E"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);