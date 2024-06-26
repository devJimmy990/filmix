import { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function PasswordInputField({
    value,
    name,
    placeholder,
    onChangeText,
    isShown = false,
    isExternal = false,
}) {
    const [showPassword, setShowPassword] = useState(isExternal ? isShown : false);
    // console.warn(isExternal, isShown);
    return (
        <TextInput
            value={value}
            style={[styles.input, isExternal ? { flex: 1 } : width = "100%"]}
            keyboardType="default"
            placeholder={placeholder}
            secureTextEntry={isExternal ? isShown : !showPassword}
            underlineStyle={{ display: 'none' }}
            onChangeText={(text) => onChangeText(name, text)}
            right={!isExternal &&
                <TextInput.Icon style={{ marginHorizontal: 0, paddingHorizontal: 0 }}
                    onPress={() => setShowPassword(!showPassword)}
                    icon={showPassword ? "eye-off" : "eye"}
                // (isShown ? "eye-off" : "eye")
                // : (showPassword ? "eye-off" : "eye")
                />}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 18,
        marginVertical: 1.25,
        marginHorizontal: 2.5,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
});
