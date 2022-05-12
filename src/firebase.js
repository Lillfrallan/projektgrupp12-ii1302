import firebase from './firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAVj7INM7guffGsZhXLNSydDBEmYakAQLk",
    authDomain: "projectgroup12-2f2a2.firebaseapp.com",
    projectId: "projectgroup12-2f2a2",
    storageBucket: "projectgroup12-2f2a2.appspot.com",
    messagingSenderId: "102821745364",
    appId: "1:102821745364:web:87c46aaaf783ce42016141",
    measurementId: "G-X3VRVLMJPS"
};

const firebaseApp= firebase.initializeApp(firebaseConfig)
const db= firebase.firestore()
const auth= firebase.auth()
export {auth}
export default db