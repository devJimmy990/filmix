import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function BtnAuthAction({ value, onPress }) {

    return (
        <TouchableOpacity style={styles.signInButton} onPress={onPress}>
            <Text style={styles.signInButtonText}>{value}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
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
});