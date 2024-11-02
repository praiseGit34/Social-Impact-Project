// Import Firebase libraries
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA181_HE4r5KsepP7P0IBSJGNE98Z7MuU8',
  authDomain: 'edulink-d8cf4.firebaseapp.com',
  projectId: 'edulink-d8cf4',
  storageBucket: 'edulink-d8cf4.appspot.com',
  messagingSenderId: '169283948856',
  appId: '1:169283948856:web:0884ef931f2d8081f4b1cd',
  measurementId: 'G-M6ZR87Z080',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
