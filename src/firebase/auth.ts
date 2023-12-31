import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword , onAuthStateChanged, getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBqdbnsK-zmo0rJiIK7byPmerU0meuoPC8",
    authDomain: "test-project-bdc7f.firebaseapp.com",
    projectId: "test-project-bdc7f",
    storageBucket: "test-project-bdc7f.appspot.com",
    messagingSenderId: "929946583943",
    appId: "1:929946583943:web:5edbcb76294e5ede5f0922"
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

export const login_email = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const login_google = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    throw error;
  }
};

export const register = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  await signOut(auth);
};

export const AuthState = (callback: (user: any) => void) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // ユーザーがログインしている
      callback(user);
    } else {
      // ユーザーがログアウトしている
      callback(null);
    }
  });
};