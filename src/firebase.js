// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCnWLBQZGycmcFG7e8fF3DNJTc3Hv-oBE8",
  authDomain: "projectwithmalika.firebaseapp.com",
  projectId: "projectwithmalika",
  storageBucket: "projectwithmalika.appspot.com",
  messagingSenderId: "419795352648",
  appId: "1:419795352648:web:ec75f70171fb9e6c2a2c7d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
