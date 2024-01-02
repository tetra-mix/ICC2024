import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBqdbnsK-zmo0rJiIK7byPmerU0meuoPC8",
    authDomain: "test-project-bdc7f.firebaseapp.com",
    projectId: "test-project-bdc7f",
    storageBucket: "test-project-bdc7f.appspot.com",
    messagingSenderId: "929946583943",
    appId: "1:929946583943:web:5edbcb76294e5ede5f0922"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);