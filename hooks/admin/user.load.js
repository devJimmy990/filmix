import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { getFirestore, doc, getDocs } from "firebase/firestore";
import FIREBASE from '../auth/firebase.config';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../controllers/redux/slices/user';

const useLoadUser = () => {
    const [userData, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const db = getFirestore(FIREBASE);
    const dispatch = useDispatch();

    const loadUserData = async (uid) => {
        setLoading(true); // Set loading state to true before starting the fetch
        try {
            console.log("Starting fetch for UID:", uid);

            // Specify the reference to the subcollection for the provided UID
            const userCollectionRef = collection(db, "users", uid, "NfrMjj936Go1Ne4p1ew0");
            const userCollectionSnapshot = await getDocs(userCollectionRef);

            // Initialize an array to store the documents in the subcollection
            const userData = [];

            // Loop through each document in the subcollection
            userCollectionSnapshot.forEach((doc) => {
                userData.push({ id: doc.id, ...doc.data() });
            });

            // Update state with the fetched data
            setUser(userData);
            dispatch(setUserData(userData));
            console.log("User data:", userData);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false); // Set loading state to false after the fetch
        }
    };


    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                loadUserData(user.uid);
            } else {
                setLoading(false); // If there's no user, set loading to false
            }
        });

        return () => unsubscribe();
    }, []);

    return { loadUserData, userData, loading, error };
}

export default useLoadUser;
