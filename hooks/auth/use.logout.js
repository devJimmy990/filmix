// useFirebaseSignOut.js
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import FIREBASE from './firebase.config';
import { useDispatch } from 'react-redux';
import { resetUserData } from '../../controllers/redux/slices/user';
import { clearFavourite } from '../../controllers/redux/slices/favourite';

const useSignOut = () => {
    const dispatch = useDispatch();

    const signOut = async () => {
        try {
            await getAuth(FIREBASE).signOut();
            dispatch(resetUserData());
            dispatch(clearFavourite());
        } catch (error) {
        }
    };

    return { signOut };
};

export default useSignOut;
