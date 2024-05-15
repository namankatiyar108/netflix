// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP1vT69uKGDFgWo5rFXmeaUa-f6xSDm0s",
  authDomain: "netflix-c6dfc.firebaseapp.com",
  projectId: "netflix-c6dfc",
  storageBucket: "netflix-c6dfc.appspot.com",
  messagingSenderId: "205174688669",
  appId: "1:205174688669:web:571736d46d1d750039bd74",
  measurementId: "G-VKZX3PQV81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();