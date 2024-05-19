import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default EmailInputField = ({
    value, name,
    placeholder,
    onChangeText,
}) => {

    return (
        <TextInput
            value={value}
            style={styles.input}
            placeholder={placeholder}
            underlineStyle={{ display: 'none' }}
            onChangeText={(res) => onChangeText(`${name}`, res)}
            keyboardType="email-address"
        />
    );
}
const styles = StyleSheet.create({
    input: {
        borderRadius: 18,
        marginVertical: 1.25,
        marginVertical: 1.25,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
});