// hooks.js
import { useState } from 'react';
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import FIREBASE from '../auth/firebase.config';

// Hook for adding a new user
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
