import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaVMKxbVp8KqduxG2sR72uo6NwPlJtO7A",
  authDomain: "fir-pedro-b1990.firebaseapp.com",
  projectId: "fir-pedro-b1990",
  storageBucket: "fir-pedro-b1990.appspot.com",
  messagingSenderId: "348159970520",
  appId: "1:348159970520:web:4863b1535fb72231541bad",
  measurementId: "G-7E6332ZV41"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider();
