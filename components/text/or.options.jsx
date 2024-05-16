import { StyleSheet, Text, View } from "react-native";

export default function OrOptions() {
    return (
        <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.line} />
        </View>
    );
}
const styles = StyleSheet.create({
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'white',
    },
    orText: {
        color: 'white',
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});