// useFirebaseSignOut.js
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import FIREBASE from './firebase.config';
import { useDispatch } from 'react-redux';
import { resetUserData } from '../../controllers/redux/slices/user';

const useSignOut = () => {
    const dispatch = useDispatch();

    const signOut = async () => {
        try {
            setSignOutLoading(true);
            await getAuth(FIREBASE).signOut();
            dispatch(resetUserData());
        } catch (error) {
        }
    };

    return { signOut };
};

export default useSignOut;
