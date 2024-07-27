// /src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUfA2lS2z_PUuEcxYmwTQwDaehbFvgpgI",
  authDomain: "devlinks-e7d76.firebaseapp.com",
  projectId: "devlinks-e7d76",
  storageBucket: "devlinks-e7d76.appspot.com",
  messagingSenderId: "531359422374",
  appId: "1:531359422374:web:e5b97df69dce422bb0e167",
  measurementId: "G-C0XZT35P9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db }