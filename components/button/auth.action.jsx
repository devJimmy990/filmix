import {
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";


export default function BtnAuthAction({ value, onPress }) {
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={onPress}>
            <Text style={styles.title}> {value} </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: '60%',
        borderRadius: 25,
        marginBottom: 10,
        paddingVertical: 12,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3498db',
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});