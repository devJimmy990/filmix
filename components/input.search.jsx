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
        outputRange: ['65%', '100%'], 
    });

    return (
        <Animated.View style={[styles.container, { width: inputWidth }]}>
            <Ionicons name="search" size={24} style={styles.icon} />
            <TextInput
                value={search}
                onBlur={handleBlur}
                style={styles.input}
                onFocus={handleFocus}
                placeholder="Search..."
                placeholderTextColor={'white'}
                onChangeText={handleSearchInput}
            />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        opacity: 0.6,
        elevation: 5,
        borderRadius: 20,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    icon: {
        marginRight: 10,
        color: 'white',
    },
    input: {
        // flex: 1,
        fontSize: 16,
        color: 'white',
        // paddingVertical: 10,

    },
});
