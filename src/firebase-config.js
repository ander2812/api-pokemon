import { initializeApp } from "firebase/app"
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBjJY0Ec0CFgqfsssKari2VZ3kwfBhG3Tc",
  authDomain: "react-aplicacion.firebaseapp.com",
  projectId: "react-aplicacion",
  storageBucket: "react-aplicacion.appspot.com",
  messagingSenderId: "526479147172",
  appId: "1:526479147172:web:ecaccd5a982ccc10832631",
  measurementId: "G-ZP41JV6MBC"
}

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)