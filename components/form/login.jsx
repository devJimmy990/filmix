import { useState } from "react";
import { View } from "react-native";
import AuthOptions from "./options";
import OrOptions from "../text/or.options";
import BtnAuthAction from "../button/auth.action";
import PasswordInputField from "../input/password.input";
import EmailInputField from "../input/email.input";
import Spacer from "../free_space";
import useSignIn from "../../hooks/auth/use.signin";
import ShowToast from "../../utils/toast";
import { useNavigation } from "@react-navigation/native";
import routes from "../../utils/routes";
import ErrorHandler from "../../utils/error.handler";

export default function LoginForm() {
    return (
        <View style={{ width: '100%' }}>
            <LoginInputs />
            <OrOptions />
            <AuthOptions />
        </View>
    );
}

const LoginInputs = () => {
    const { navigate } = useNavigation();
    const [user, setUser] = useState({ email: "", password: "" })
    const { loading, error, signInWithEmail } = useSignIn(); // Use the custom hook

    const onTextChange = (name, res) =>
        setUser({ ...user, [name]: res })

    const resetUser = () => setUser({ email: "", password: "" })
    const handleSignIn = async () => {
        try {
            await signInWithEmail(user.email, user.password);
            ShowToast('User signed in successfully');
            setTimeout(() => {
                resetUser();
                navigate(routes.HOME);
            }, 2000);
        } catch (error) { ShowToast(ErrorHandler.login(error)); }
    };

    return (
        <View style={{ width: '100%' }}>
            <EmailInputField
                name="email"
                placeholder="Email"
                value={user.email}
                onChangeText={onTextChange}
            />

            <PasswordInputField
                name="password"
                value={user.password}
                placeholder="Password"
                onChangeText={onTextChange}
            />
            <Spacer height={10} />
            <BtnAuthAction value="Sign In" onPress={handleSignIn} />
        </View>
    );
}
