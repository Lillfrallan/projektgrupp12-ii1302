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
    appId: "1:102821745364:web:87c46aaaf783ce42016141",
    measurementId: "G-X3VRVLMJPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);