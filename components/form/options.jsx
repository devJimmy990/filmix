import { StyleSheet, View } from 'react-native';
import BtnSignOption from '../button/options.sign';
import { useCallback } from 'react';
import useGoogleSignIn from '../../hooks/auth/use.google';
import useGithubSignIn from '../../hooks/auth/use.github';

export default function AuthOptions() {
    const { signInWithGoogle, user, googleLoading, googleError, } = useGoogleSignIn();
    const { signInWithGithub, githubLoading, githubError } = useGithubSignIn();

    const handleGoogleSignIn = async () => {
        // console.warn("clicked");
        // signInWithGoogle();
        // console.warn(user);
    }

    const handleFacebookSignIn = useCallback(() => {

    })

    const handleGithubSignIn = useCallback(() => {
        // signInWithGithub();
    })

    // Function to authenticate user with Google tokens
    // const signInWithGoogle = async ({ accessToken, idToken }) => {
    //     try {
    //         // Send the tokens to your backend server for verification
    //         const response = await fetch('YOUR_BACKEND_ENDPOINT', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ accessToken, idToken }),
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to authenticate with Google');
    //         }

    //         // Parse the response from the server
    //         const data = await response.json();

    //         // Assuming the server returns a JWT token upon successful authentication
    //         const { token } = data;

    //         // Store the token securely in AsyncStorage or Redux state
    //         // Example using AsyncStorage:
    //         await AsyncStorage.setItem('token', token);

    //         // Navigate to the authenticated user's home screen or perform any other necessary actions
    //         // Example using navigation:
    //         navigation.navigate('Home');
    //     } catch (error) {
    //         console.error('Failed to authenticate with Google:', error);
    //         // Handle error (e.g., display error message to user)
    //     }
    // };
    return (
        <View style={styles.container}>
            <BtnSignOption img={require('../../assets/google.png')} onPress={handleGoogleSignIn} />
            <BtnSignOption img={require('../../assets/facebook.png')} onPress={handleFacebookSignIn} />
            <BtnSignOption img={require('../../assets/github.png')} onPress={handleGithubSignIn} />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        gap: 18,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    }
});