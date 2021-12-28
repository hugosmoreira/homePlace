// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPcxLNO_xsPD_WzTvirvpPGwmIJYF0Ea8",
  authDomain: "marketplace-house-app.firebaseapp.com",
  projectId: "marketplace-house-app",
  storageBucket: "marketplace-house-app.appspot.com",
  messagingSenderId: "683445665610",
  appId: "1:683445665610:web:14b21b96106e020b7e4bb3"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()