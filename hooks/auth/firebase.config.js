import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCMzrLFXqrMPvWtrS-p7NEmlgAnYgKGhu4",
    authDomain: "filmix-a8f01.firebaseapp.com",
    projectId: "filmix-a8f01",
    storageBucket: "filmix-a8f01.appspot.com",
    messagingSenderId: "894380146579",
    appId: "1:894380146579:web:b5ef30169d373881e23266"
};
const FIREBASE = initializeApp(firebaseConfig);
export default FIREBASE;