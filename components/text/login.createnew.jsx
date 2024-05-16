import { StyleSheet, Text, TouchableOpacity } from "react-native";
import routes from "../../utils/routes";
import { useNavigation } from "@react-navigation/native";


export default function CreateNewAccount() {

    const { navigate } = useNavigation();
    return (
        <Text style={{ color: 'white', }}>
            Don't have an account?{' '}
            <TouchableOpacity onPress={() => navigate(routes.SIGNUP)}>
                <Text style={styles.signupLink}>Create New</Text>
            </TouchableOpacity>
        </Text>
    );
}
const styles = StyleSheet.create({
    signupLink: {
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 13,
    },
})