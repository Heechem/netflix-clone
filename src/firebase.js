// Import the functions you need from the SDKs you need
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

const app = initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// const auth = firebase.auth();
// // const db = firebase.firestore();

const auth = getAuth(app);
// const db = getFirestore(app);
const db = getFirestore(app);

export { auth };
export default db;
