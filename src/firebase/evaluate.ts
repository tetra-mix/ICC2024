import {product} from '../types/products';
import {doc, updateDoc} from 'firebase/firestore';
import {db, auth} from './config';
import {getDocIDbyProduct} from './search';

export const updateProductByProduct_id = async (product_id:number, updateData: product) => {
    getDocIDbyProduct(product_id)
    .then(docID => {
        if(docID)
        {
            const docRef = doc(db, "products", docID);
            updateDoc(docRef, updateData);
        }
    });
}

export const updateProductByDocId= async (docID:string, updateData: product) => {
    const docRef = doc(db, "products", docID);
    updateDoc(docRef, updateData);
}

export const updataUser = async (updateData: any) => {
    const user = auth.currentUser;
    if(user){
        const userRef = doc(db, "users", user.uid);
        updateDoc(userRef, updateData);
    }
}