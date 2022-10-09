import { initializeApp } from "firebase/app";
import 'firebase/auth';
// import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCbaMWqmS6XymgZetsxXRiF_ipovQosShs",
    authDomain: "notes-app-firebase-6c46b.firebaseapp.com",
    projectId: "notes-app-firebase-6c46b",
    storageBucket: "notes-app-firebase-6c46b.appspot.com",
    messagingSenderId: "678393048664",
    appId: "1:678393048664:web:280be7215528c4d96a642d",
    measurementId: "G-BJEZJBK62E"
};

// Initialize Firebase
const appFirebaseConfig = initializeApp(firebaseConfig);

export default appFirebaseConfig;