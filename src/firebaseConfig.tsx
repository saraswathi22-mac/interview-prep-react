import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA78qATfXLSi3vDwUL2uJ6M7FXGAlpsEbs",
  authDomain: "drive-clone-basic.firebaseapp.com",
  projectId: "drive-clone-basic",
  storageBucket: "drive-clone-basic.appspot.com",
  messagingSenderId: "116853625749",
  appId: "1:116853625749:web:60b59ac994088285b7dc9c",
  measurementId: "G-CMTC8CE97H",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);
