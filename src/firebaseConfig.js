import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCUsrVLhCistg8wbzUydO5UMnkYfME_5EY",
    authDomain: "linkedin-clone-c75c3.firebaseapp.com",
    projectId: "linkedin-clone-c75c3",
    storageBucket: "linkedin-clone-c75c3.appspot.com",
    messagingSenderId: "994115706592",
    appId: "1:994115706592:web:a106964aa0205a61b1fa85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { auth, app }