// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFnKjoxseEOFCiSc9y70GfVApxWiDmijQ",
    authDomain: "morning-routine-tracker.firebaseapp.com",
    databaseURL: "https://morning-routine-tracker-default-rtdb.firebaseio.com",
    projectId: "morning-routine-tracker",
    storageBucket: "morning-routine-tracker.appspot.com",
    messagingSenderId: "650921266379",
    appId: "1:650921266379:web:238396e5d6df963251df4e"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// this exports the CONFIGURED version of firebase
export default firebase;