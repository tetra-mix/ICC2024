import { db, storage } from './config';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default class Sweets {
    id: number;
    title: string;
    price: number;
    genre: string;
    description: string;
    url: string = "";
    value: {
        flavor: number,
        smell: number,
    };

    constructor(id: number, title: string, price: number, genre: string, description: string, file: File | null = null) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.genre = genre;
        this.description = description;
        this.value = {
            flavor: 0,
            smell: 0
        }
        if(file)
            this.upload(file);
    }

    async upload(file: File) {
        if (!file) throw new Error("ファイルが見つかりません。");
        const storageRef = ref(storage, `images/${this.title}`);
        const snapshot = await uploadBytes(storageRef, file);
        this.url = await getDownloadURL(snapshot.ref);

        const docRef = doc(db, "Sweets", this.id.toString());
        await setDoc(docRef, {
            id: this.id,
            title: this.title,
            price: this.price,
            genre: this.genre,
            description: this.description,
            url: this.url,
            value: this.value
        });
    }
}