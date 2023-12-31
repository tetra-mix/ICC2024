import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBqdbnsK-zmo0rJiIK7byPmerU0meuoPC8",
    authDomain: "test-project-bdc7f.firebaseapp.com",
    projectId: "test-project-bdc7f",
    storageBucket: "test-project-bdc7f.appspot.com",
    messagingSenderId: "929946583943",
    appId: "1:929946583943:web:5edbcb76294e5ede5f0922"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  await signOut(auth);
};