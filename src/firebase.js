import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCB66BYsdcIWOfURB7uJOi8269U9E_5cWQ",
    authDomain: "boodschappen-4-you.firebaseapp.com",
    databaseURL: "https://boodschappen-4-you.firebaseio.com",
    projectId: "boodschappen-4-you",
    storageBucket: "boodschappen-4-you.appspot.com",
    messagingSenderId: "408215504101",
    appId: "1:408215504101:web:a9db723b07da77a3f6000c"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;

