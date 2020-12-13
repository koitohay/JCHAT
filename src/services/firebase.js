import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAQgO5gBNrrEB02eBQKDdAHkiHaWrxzUgM",
    authDomain: "jugaadchat-db4f8.firebaseapp.com",
    databaseURL: "https://jugaadchat-db4f8-default-rtdb.europe-west1.firebasedatabase.app"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();