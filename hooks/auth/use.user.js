// import firestore from '@react-native-firebase/firestore';
// export default async function useSaveUserData(user) {
//     await firestore()
//         .collection('users')
//         .doc(user.uid).set({ ...user.remove('uid') });
// }


import { useState } from 'react';
import FIREBASE from './firebase.config';
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";

const useAddNewUser = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const addNewUser = async (userData) => {
        setLoading(true);
        try {
            await addDoc(collection(getFirestore(FIREBASE), 'users'), userData);
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    };

    return { addNewUser, loading, error };
}

export default useAddNewUser;


