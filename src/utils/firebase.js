// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth, 
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,

  } from 'firebase/auth'

import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyBgKp9xT7ttbCk8UYOy7Y-XpGaYRWU--Jk",
  authDomain: "mo-store-10612.firebaseapp.com",
  projectId: "mo-store-10612",
  storageBucket: "mo-store-10612.appspot.com",
  messagingSenderId: "664928288937",
  appId: "1:664928288937:web:c41860717f1a86edcb29b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);//returns auth related data

const provider = new GoogleAuthProvider();


export const signInWithGoogle = () => signInWithPopup(auth,provider)


export const db = getFirestore();


export const createUserDocumentfromAuth =  async (
  userAuth,
  additionalInformation = {},
  ) => {
  console.log(userAuth.uid)
  const userDocRef = doc(db,'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot)
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
   return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
   
  if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
   
    if(!email || !password) return;
      return await signInWithEmailAndPassword(auth, email, password);
    };