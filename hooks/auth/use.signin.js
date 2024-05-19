import { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const useSignIn = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    const auth = getAuth();

    const signInWithEmail = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setUser(user);
            setLoading(false);
            setError(null);
            return user;
        } catch (error) {
            setError(error);
            setLoading(false);
            throw error;
        }
    };

    useEffect(() => {
        // Optional: Check if the user is already signed in when the component mounts
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    return { user, loading, error, signInWithEmail };
};

export default useSignIn;
