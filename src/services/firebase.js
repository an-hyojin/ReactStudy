import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAeUGg-dTO29tudyYHBXgIre2DiCdM2naI',
  authDomain:'card-maker-ee680.firebaseapp.com',
  databaseURL: 'https://card-maker-ee680-default-rtdb.firebaseio.com',
  projectId: 'card-maker-ee680',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
