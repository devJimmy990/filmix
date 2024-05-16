import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

export default function InputField({
    value,
    placeholder,
    onChangeText,
    keyboardType,
    isPassword = false,
}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={(isPassword && styles.passwordContainer) || styles.input}>
            <TextInput
                style={isPassword && { flex: 1 }}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                secureTextEntry={isPassword && !showPassword}
            />
            {isPassword && <TouchableOpacity onPress={() => setShowPassword(!showPassword)} >
                <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color="black" />
            </TouchableOpacity>
            }
        </View>
    );
}
const styles = StyleSheet.create({
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
});