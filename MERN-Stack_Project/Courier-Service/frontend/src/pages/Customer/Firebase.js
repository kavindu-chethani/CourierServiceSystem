import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBGMmKRLa2HdRNxX7087f9oKsVGHOcqvU0",
    authDomain: "b03-itp-15.firebaseapp.com",
    projectId: "b03-itp-15",
    storageBucket: "b03-itp-15.appspot.com",
    messagingSenderId: "827246987585",
    appId: "1:827246987585:web:b13c47471056ec45e179c0",
    measurementId: "G-WGJBH5GFCS"
  };


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);