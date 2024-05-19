import React from 'react';
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function TextInputField({
    value,
    name,
    placeholder,
    onChangeText,
}) {
    return (
        <TextInput
            value={value}
            keyboardType="text"
            style={styles.input}
            placeholder={placeholder}
            underlineStyle={{ display: 'none' }}
            onChangeText={(res) => onChangeText(name, res)}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        borderRadius: 18,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
});
