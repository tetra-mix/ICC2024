import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC5Z6M21J0xTciYad2gd-8wGHirtKT9MCY",
    authDomain: "businesscontest2024.firebaseapp.com",
    projectId: "businesscontest2024",
    storageBucket: "businesscontest2024.appspot.com",
    messagingSenderId: "306990907319",
    appId: "1:306990907319:web:edecd31be5c904c2fc3232",
    measurementId: "G-0HEJQ5B5BZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);