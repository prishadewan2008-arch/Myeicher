// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
    // production : false,
    firebase : {
        apiKey: "AIzaSyBlSXPhM2WfwGwRU1GUw8uMi7QzQY4QI0Y",
        authDomain: "myeicherintern.firebaseapp.com",
        projectId: "myeicherintern",
        storageBucket: "myeicherintern.firebasestorage.app",
        messagingSenderId: "938300407710",
        appId: "1:938300407710:web:b8d5e7811c5c43ebdb608f",
        measurementId: "G-G7S9WCTH8N"
    }
};

// Initialize Firebase
// const app = initializeApp(environment.firebase);
// const analytics = getAnalytics(app);

// export const auth = getAuth(app);