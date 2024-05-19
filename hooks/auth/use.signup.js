import FIREBASE from './firebase.config';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


const useCreateUserWithEmailAndPassword = async (email, pass) => {
    try {
        const userCredential = await createUserWithEmailAndPassword
            (getAuth(FIREBASE), email, pass);
        return userCredential;
    } catch (error) {
        throw error;
    }
}
export { useCreateUserWithEmailAndPassword as useCreateUser };
