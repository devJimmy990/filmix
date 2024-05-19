import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Animated } from 'react-native';
import { useSelector } from 'react-redux';
import useSignOut from '../hooks/auth/use.logout';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import sources from '../utils/sources';
import { StatusBar } from 'expo-status-bar';
import routes from '../utils/routes';
import ShowToast from "../utils/toast";

export default function ProfilePage() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const { signOut } = useSignOut();
    const { navigate } = useNavigation();
    const { fName, lName, email, phone, age } = useSelector((state) => state.user.user);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }, [fadeAnim]);

    const handleSignOut = () => {
        signOut();
        navigate(routes.HOME);
        ShowToast('Signed out successfully');
    }

    return (
        <ImageBackground source={{ uri: sources.SPLASH }} style={styles.background}>
            <StatusBar style="light" backgroundColor='black' />
            <View style={[styles.container,]}>
                <View style={styles.header}>
                    <Image source={require('../assets/profile.png')} style={styles.avatar} />
                </View>

                <Animated.View style={[styles.profileInfo, { opacity: fadeAnim }]}>
                    <View style={styles.infoRow}>
                        <InfoField icon="person" value={fName} />
                        <InfoField icon="person" value={lName} />
                    </View>

                    <InfoField icon="calendar" value={age.toString()} />
                    <InfoField icon="call" value={phone} />
                    <InfoField icon="mail" value={email} />
                </Animated.View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigate(routes.FAVOURITES)} >
                    <Ionicons name='heart' size={32} color='black' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={handleSignOut} >
                    <MaterialIcons name='exit-to-app' size={32} color='black' />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

function InfoField({ icon, value }) {
    return (
        <View style={styles.infoField}>
            <Ionicons name={icon} size={20} color="#fff" style={styles.icon} />
            <Text style={styles.info}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 40,
        marginRight: 20,
    },
    profileInfo: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 10,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    infoField: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 10,
    },
    info: {
        fontSize: 16,
        color: '#fff',
    },
    btnContainer: {
        position: 'absolute',
        bottom: 40,
        right: 20,
    },
    btn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: 'yellow',
        justifyContent: 'center',
    },
});
