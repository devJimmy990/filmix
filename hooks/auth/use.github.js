import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

import { useState } from "react";

const useGithubSignIn = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const signInWithGithub = async () => {
        setLoading(true);
        setError(null);

        try {
            const auth = getAuth();
            const provider = new GithubAuthProvider();
           

            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Do something with the signed-in user (e.g., store user data, navigate to the next screen)
            console.log("Signed in user:", user);
        } catch (error) {
            console.error("Error signing in with GitHub:", error);
            setError(error.message || "An error occurred while signing in.");
        } finally {
            setLoading(false);
        }
    };

    return { signInWithGithub, loading, error };
};

export default useGithubSignIn;
