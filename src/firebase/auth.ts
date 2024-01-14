import { createUserWithEmailAndPassword , onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {auth} from './config';
import { uploadUserData } from './user';

const googleProvider = new GoogleAuthProvider();

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

export const register = async (name: string, email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    uploadUserData(userCredential.user, {id: 1, name: name, wants: [], bought: [], answered: []} )
    
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
      console.log(user);
      callback(user);
    } else {
      // ユーザーがログアウトしている
      callback(null);
    }
  });
};