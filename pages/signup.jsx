import sources from '../utils/sources';
import React, { useEffect } from 'react';
import SignupForm from '../components/form/signup';
import { View, StyleSheet, ImageBackground } from 'react-native';
import SigninWithAccount from '../components/text/auth.footer_link';
import AnimatedWelcomeMessage from '../components/text/animated.welcome';

export default function LoginPage() {
    return (
        <ImageBackground
            source={{ uri: sources.SPLASH }}
            style={styles.background}
            blurRadius={5}
        >
            <View style={styles.container}>
                <AnimatedWelcomeMessage />
                <SignupForm />
                <SigninWithAccount isLogin={false} />
            </View>
        </ImageBackground >
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
});

