import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './config';
import AppUser  from './user';

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = new AppUser(userCredential.user);
    return user;
  } catch (error) {
    throw error;
  }
};

export const register = async (name: string, email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = new AppUser(userCredential.user, email, name, true);
    return user;
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