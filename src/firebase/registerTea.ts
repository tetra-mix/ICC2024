import { db, storage } from './config';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default class Tea {
    id: number;
    title: string;
    price: number;
    genre: string;
    description: string;
    url: string = "";
    value: {
        bitter: number,
        chewy: number,
        flancy: number,
        moist: number,
        rich: number,
        salty: number,
        sour: number,
        spicy: number,
        sweet: number,
    };

    constructor(id: number, title: string, price: number, genre: string, description: string) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.genre = genre;
        this.description = description;
        this.value = {
            bitter: 0,
            chewy: 0,
            flancy: 0,
            moist: 0,
            rich: 0,
            salty: 0,
            sour: 0,
            spicy: 0,
            sweet: 0,
        }
    }

    async upload(file: File) {
        if (!file) throw new Error("ファイルが見つかりません。");
        const storageRef = ref(storage, `images/${this.title}`);
        const snapshot = await uploadBytes(storageRef, file);
        this.url = await getDownloadURL(snapshot.ref);

        const docRef = doc(db, "Tea", this.id.toString());
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