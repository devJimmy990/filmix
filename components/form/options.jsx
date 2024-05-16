import { StyleSheet, View } from 'react-native';
import BtnSignOption from '../button/options.sign';
import { useCallback } from 'react';

export default function AuthOptions() {
    const handleGoogleSignIn = useCallback(() => {

    })

    const handleFacebookSignIn = useCallback(() => {

    })

    const handleGithubSignIn = useCallback(() => {

    })

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