// useGoogleSignIn.js
import { useState, useEffect } from 'react';
import { getAuth, signInWithRedirect, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import FIREBASE from './firebase.config';

const useGoogleSignIn = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const auth = getAuth(FIREBASE);

    const signInWithGoogle = async () => {
        setLoading(true);
        setError(null);

        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error(error);
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
       
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    return { signInWithGoogle, user, loading, error };
};

export default useGoogleSignIn;
