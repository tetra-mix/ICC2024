import { db, storage } from './config';
import { doc, setDoc, getDoc, getDocs, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export interface Product {
  title: string;
  price: number;
  kind: string;
  description: string;
}

// 画像をStorageにアップロードする関数
export const uploadImageToStorage = async (file: File, data: Product): Promise<void> => {
  if (!file) throw new Error("ファイルが見つかりません。");

  // 画像をStorageにアップロードする
  const storageRef = ref(storage, `images/${data.title}`);
  const snapshot = await uploadBytes(storageRef, file);
  const imageURL = await getDownloadURL(snapshot.ref);

  // 画像のURLをFirestoreに保存する
  const docRef = doc(db, "products", data.title);
  await setDoc(docRef, {
    ...data,
    imageURL,
  });
};

export const getProductData = async (docId: string) => {
  const docRef = doc(db, "products", docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.error('No such document!');
    throw new Error('Document not found');
  }
}

export const getAllProducts = async () => {
  const collectionRef = collection(db, "products");
  const collectionSnapshot = await getDocs(collectionRef);
  const docs = collectionSnapshot.docs.map(doc => doc.data());
  return docs;
}

export const getProductImage = async (title: string) => {
  const fileRef = ref(storage, `images/${title}`);
  try {
    const fileUrl = await getDownloadURL(fileRef);
    return fileUrl;
  } catch (error) {
    console.error('Error getting file URL:', error);
    throw error;
  }
}