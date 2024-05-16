
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import routes from '../utils/routes';
import AnimatedWelcomeMessage from '../components/text/animated.welcome';
import BtnSignOption from '../components/button/options.sign';
import InputField from '../components/input.field';
import CreateNewAccount from '../components/text/login.createnew';
import LoginForm from '../components/form/login';

const LoginPage = () => {
    const { navigate } = useNavigation();


    const handleSignIn = () => {
        // Handle sign-in logic
    };

    const handleGoogleSignIn = () => {
        // Handle Google sign-in logic
    };

    const handleGithubSignIn = () => {
        // Handle GitHub sign-in logic
    };

    return (
        <ImageBackground
            source={{ uri: 'https://source.unsplash.com/random/?cinema' }}
            style={styles.background}
            blurRadius={5} 
        >
            <View style={styles.container}>
                <AnimatedWelcomeMessage />
                <LoginForm />
                <CreateNewAccount />
            </View>
        </ImageBackground >
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', // Cover the entire screen
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
});

export default LoginPage;
