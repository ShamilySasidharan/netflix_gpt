// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ7u_3Ltu4FInUWSqAcbdwcr6cwU7XcfM",
  authDomain: "netflixgpt-4d0a4.firebaseapp.com",
  projectId: "netflixgpt-4d0a4",
  storageBucket: "netflixgpt-4d0a4.appspot.com",
  messagingSenderId: "84508516865",
  appId: "1:84508516865:web:c5aba827a3c0e477621600",
  measurementId: "G-99JRXK9HXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();