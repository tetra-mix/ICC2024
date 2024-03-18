import { db } from './config';
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';
import { User } from 'firebase/auth';

export default class AppUser {
    uid: string = "";
    email: string = "";
    name: string = "";
    bought_sets: number[] = [];
    answered_sets: number[] = [];
    user: User;
    constructor(user: User, email?: string, name?: string, _new: boolean = false) {
        this.uid = user.uid;
        if (email) this.email = email;
        this.user = user;
        if (name) {
            this.name = name;
        }
        if (_new) {
            this.uploadUser();
        } else {
            this.getUser();
        }
    }

    async uploadUser() {
        const userRef = doc(db, "users", this.uid);
        await setDoc(userRef, {
            name: this.name,
            email: this.email,
            bought_sets: this.bought_sets,
            answered_sets: this.answered_sets
        });
    }

    async getUser() {
        const docRef = doc(db, "users", this.uid);
        const data = await getDoc(docRef);
        console.log(data);

        if (data.exists()) {
            this.name = data.data().name;
            this.email = data.data().email;
            this.answered_sets = data.data().answered_sets;
            this.bought_sets = data.data().bought_sets;
        }
    }

    async updateUser() {
        const userRef = doc(db, "users", this.uid);
        try {
            await updateDoc(userRef, {
                name: this.name,
                email: this.email,
                bought_sets: this.bought_sets,
                answered_sets: this.answered_sets
            });
            console.log("Document successfully updated!");
        } catch (error) {
            console.log(error);
        }
    }
}