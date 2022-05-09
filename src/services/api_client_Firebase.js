import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, deleteObject, ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAVj7INM7guffGsZhXLNSydDBEmYakAQLk",
    authDomain: "projectgroup12-2f2a2.firebaseapp.com",
    projectId: "projectgroup12-2f2a2",
    storageBucket: "projectgroup12-2f2a2.appspot.com",
    messagingSenderId: "102821745364",
    appId: "1:102821745364:web:87c46aaaf783ce42016141",
    measurementId: "G-X3VRVLMJPS"
};

const get_image_url = (IMAGE) => {
    return `https://firebasestorage.googleapis.com/v0/b/projectgroup12-2f2a2.appspot.com/o/images%2F${IMAGE}?alt=media`;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage();

const delete_image = (IMAGE) => {
    const deleteRef = ref(storage, `images/${IMAGE}`)
    deleteObject(deleteRef)
}


const download_image = (IMAGE) => {
    const downloadRef = ref(storage, `images/${IMAGE}`)

    getDownloadURL(downloadRef)
    .then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob'
        xhr.onload = (event) => {
            const blob = xhr.response;
        }
        xhr.open('GET', url)
        xhr.send()
    })
}


export  {get_image_url, delete_image, download_image,  firebaseConfig, app, analytics, storage, getDownloadURL, ref} 