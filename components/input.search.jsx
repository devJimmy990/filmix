import React from 'react';
import { TextInput, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchInput({ search, handleSearchInput }) {
    const animatedValue = React.useRef(new Animated.Value(0)).current;

    const handleFocus = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const handleBlur = () => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const inputWidth = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['40%', '80%'], // Adjust the width values as needed
    });

    return (
        <Animated.View style={[styles.container, { width: inputWidth }]}>
            <Ionicons name="search" size={24} color="#aaa" style={styles.icon} />
            <TextInput
                placeholder="Search..."
                value={search}
                onChangeText={handleSearchInput}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={styles.input}
            />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        opacity: 0.6,
        borderRadius: 20,
        paddingHorizontal: 20,
        elevation: 5,
    },
    icon: {
        marginRight: 10,
        color: 'white',
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: 'white',
        paddingVertical: 10,
    },
});
