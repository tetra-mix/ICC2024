import { db, storage } from './config';
import { doc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

interface Product {
    title: string;
    price: number;
    kind: string;
    description: string;
}

// 画像をStorageにアップロードする関数
export const uploadImageToStorage = async (file: File, data: Product): Promise<void> => {
    if (!file) throw new Error("ファイルが見つかりません。");
  
    // 画像をStorageにアップロードする
    const storageRef = ref(storage, `images/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const imageURL = await getDownloadURL(snapshot.ref);
    
    // 画像のURLをFirestoreに保存する
    const docRef = doc(db, "products", data.title);
    await setDoc(docRef, {
      ...data,
      imageURL,
    });
  };