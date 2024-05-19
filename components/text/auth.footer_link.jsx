import routes from "../../utils/routes";
import { StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function FormFooterTextLink({ isLogin = true }) {
    const { navigate } = useNavigation();
    const handleClick = () =>
        navigate(isLogin ? routes.SIGNUP : routes.LOGIN)

    return (
        <Text style={{ color: 'white', lineHeight: 20, padding: 0, margin: 0 }}>
            {isLogin ? 'Don`t have an account? ' : "Already have an account? "}
            <Text style={styles.link} onPress={handleClick}>
                {isLogin ? "Create New" : "Sign In"}
            </Text>
        </Text>
    );
}

const styles = StyleSheet.create({
    link: {
        margin: 0,
        padding: 0,
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        alignItems: 'baseline',
        textDecorationLine: 'underline',
    },
});
