import firebase from "firebase/compat/app";
import {getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAlE2OvNH-ADQkIqvC_GWN2ZKtyB1c5Pq0",
    authDomain: "crwn-clothing-65cd4.firebaseapp.com",
    projectId: "crwn-clothing-65cd4",
    storageBucket: "crwn-clothing-65cd4.appspot.com",
    messagingSenderId: "120827604511",
    appId: "1:120827604511:web:37f7b08edeaae93f8caf2a",
    measurementId: "G-ZDFBJHKTRB"
};

firebase.initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = firebase.firestore();

// Authenticate Using Google Sign-In
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
}

export default firebase;