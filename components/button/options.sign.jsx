import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function BtnSignOption({ img, onPress }) {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress} >
            <Image source={img} style={styles.img} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    img: {
        width: 51,
        height: 51,
    },
});
