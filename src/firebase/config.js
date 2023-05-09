// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_4oeBnImdcVewu6VPji6wVY3aB6AXokg",
    authDomain: "order-mate-pos.firebaseapp.com",
    projectId: "order-mate-pos",
    storageBucket: "order-mate-pos.appspot.com",
    messagingSenderId: "435499021909",
    appId: "1:435499021909:web:de0a16272a896f954506dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)