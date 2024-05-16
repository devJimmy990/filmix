import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState(null);

    useEffect(() => {
        fetchBackgroundImage();
    }, []);

    const fetchBackgroundImage = async () => {
        try {
            const response = await fetch(
                'https://api.unsplash.com/photos/random?query=cinema&client_id=YOUR_UNSPLASH_ACCESS_KEY'
            );
            const data = await response.json();
            setBackgroundImage(data.urls.regular);
        } catch (error) {
            console.error('Error fetching background image:', error);
        }
    };

    const handleSignIn = () => {
        // Handle sign-in logic
    };

    const handleGoogleSignIn = () => {
        // Handle Google sign-in logic
    };

    const handleGithubSignIn = () => {
        // Handle GitHub sign-in logic
    };

    const handleSignUp = () => {
        navigation.navigate('SignUp'); // Navigate to signup page
    };

    return (
        <ImageBackground
            source={{ uri: backgroundImage }}
            style={styles.background}
            blurRadius={5} // Add blur effect for cinematic feel
        >
            <View style={styles.container}>
                <Text style={styles.title}>Welcome Back</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color="gray" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
                    <Text style={styles.signInButtonText}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.orContainer}>
                    <View style={styles.line} />
                    <Text style={styles.orText}>or</Text>
                    <View style={styles.line} />
                </View>
                <TouchableOpacity style={styles.socialButton} onPress={handleGoogleSignIn}>
                    {/* <SvgUri
                        width="30"
                        height="30"
                        uri="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    /> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton} onPress={handleGithubSignIn}>
                    {/* <SvgUri
                        width="30"
                        height="30"
                        uri="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    /> */}
                </TouchableOpacity>
                <Text style={styles.signupText}>
                    Don't have an account?{' '}
                    <TouchableOpacity onPress={handleSignUp}>
                        <Text style={styles.signupLink}>Sign up here</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </ImageBackground>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginBottom: 20,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginBottom: 20,
    },
    passwordInput: {
        flex: 1,
    },
    signInButton: {
        width: '100%',
        backgroundColor: '#3498db',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        marginBottom: 20,
    },
    signInButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'white',
    },
    orText: {
        color: 'white',
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    socialButton: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    signupText: {
        color: 'white',
    },
    signupLink: {
        color: 'white',
        textDecorationLine: 'underline',
    },
});

export default LoginPage;
