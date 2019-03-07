import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBgmEasGVGUPPqZpKgG0pV-9n6QSomUbgc",
    authDomain: "capstone-1996.firebaseapp.com",
    databaseURL: "https://capstone-1996.firebaseio.com",
    projectId: "capstone-1996",
    storageBucket: "capstone-1996.appspot.com",
    messagingSenderId: "488403964252"
};
firebase.initializeApp(config);
const storage = firebase.storage();

export {
    storage, firebase as default
}