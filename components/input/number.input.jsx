import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function NumberInputField({
    value, name,
    placeholder,
    onChangeText,
}) {
    return (
        <TextInput
            value={value}
            keyboardType="numeric"
            placeholder={placeholder}
            underlineStyle={{ display: 'none' }}
            onChangeText={(res) => onChangeText(`${name}`, res)}
            style={[styles.input, flex = 1]}
        />
    );
}
const styles = StyleSheet.create({
    input: {
        borderRadius: 25,
        marginVertical: 1.25,
        marginVertical: 1.25,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    }
});