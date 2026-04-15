import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyALgefsfFSnY98ax0kSwDS3GNnjVgN9YbI",
  authDomain: "projeto02-cawa-pedro-6ca9c.firebaseapp.com",
  projectId: "projeto02-cawa-pedro-6ca9c",
  storageBucket: "projeto02-cawa-pedro-6ca9c.firebasestorage.app",
  messagingSenderId: "1016357718698",
  appId: "1:1016357718698:web:328c63e8bc8fafc77d5ed3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };