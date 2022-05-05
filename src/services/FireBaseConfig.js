// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVj7INM7guffGsZhXLNSydDBEmYakAQLk",
  authDomain: "projectgroup12-2f2a2.firebaseapp.com",
  projectId: "projectgroup12-2f2a2",
  storageBucket: "projectgroup12-2f2a2.appspot.com",
  messagingSenderId: "102821745364",
  appId: "1:102821745364:web:bac4f22e03a4ef3f016141",
  measurementId: "G-1XR4T5Z7L3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);