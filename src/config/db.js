import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA1Y8_Oa-CwdYotrR0WT1zkd-cSqs913og",
  authDomain: "hackothon-d4a97.firebaseapp.com",
  projectId: "hackothon-d4a97",
  storageBucket: "hackothon-d4a97.appspot.com",
  messagingSenderId: "991501534602",
  appId: "1:991501534602:web:629d6763983223dcb53473"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);


export {
    auth,db,storage
}