import { useState } from "react";
import { View } from "react-native";
import AuthOptions from "./options";
import InputField from "../input.field";
import OrOptions from "../text/or.options";
import BtnAuthAction from "../button/auth.action";

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {

    }
    return (
        <View style={{ width: '100%' }}>
            <InputField
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <InputField
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                keyboardType="text"
                isPassword={true}
            />
            <BtnAuthAction value="Sign In" onPress={handleSignIn} />
        </View>
    );
}
