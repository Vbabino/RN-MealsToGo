import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "<fill in your own>",
  authDomain: "<fill in your own>",
  projectId: "<fill in your own>",
  storageBucket: "<fill in your own>",
  messagingSenderId: "<fill in your own>",
  appId: "<fill in your own>",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
