import { db } from './config';
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';
import { User } from 'firebase/auth';

interface user {
    name: string;
    product_id: string[];
    rating: number[];
    kind: string;
    description: string;
}

export const uploadUserData = async (currentuser: User, data: user) => {
    const userRef = doc(db, "users", currentuser.uid);
    await setDoc(userRef, {
        ...data
    });
}

export const getUserData = async (currentuser: User) => {
    const data = await getDoc(doc(db, "users", currentuser.uid));
    console.log(data);
    return data;
}

export const updateUserData = async (currentuser: User, data: user) => {
    const userRef = doc(db, "users", currentuser.uid);
    try {
        await updateDoc(userRef, {
            ...data
        });
        console.log("Document successfully updated!");
    } catch (error) {
        console.log(error);
    }
}