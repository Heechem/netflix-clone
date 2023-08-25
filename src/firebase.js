// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAbvcZrFkH7UsMrmJtj-EDjnBNYSkqlvSQ',
  authDomain: 'netflix-clone-61a0a.firebaseapp.com',
  projectId: 'netflix-clone-61a0a',
  storageBucket: 'netflix-clone-61a0a.appspot.com',
  messagingSenderId: '532321982588',
  appId: '1:532321982588:web:451fc0715dacb7bb3711f9',
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const db = getFirestore(app);

export { auth };
export default db;
