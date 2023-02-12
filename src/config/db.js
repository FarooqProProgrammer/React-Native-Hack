import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDdTk2Jl06s2UeRtfjtfesl2Zqrp0zGvS0",
  authDomain: "chat2-adc88.firebaseapp.com",
  projectId: "chat2-adc88",
  storageBucket: "chat2-adc88.appspot.com",
  messagingSenderId: "829383627489",
  appId: "1:829383627489:web:827e07bcba61ae9a355da0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);


export {
    auth,db,storage
}