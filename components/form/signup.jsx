import { useState } from "react";
import { Pressable, StyleSheet, ToastAndroid, TouchableOpacity, TouchableOpacityBase, View } from "react-native";
import AuthOptions from "./options";
import TextInputField from "../input/text.input";
import OrOptions from "../text/or.options";
import BtnAuthAction from "../button/auth.action";
import PasswordInputField from "../input/password.input";
import NumberInputField from "../input/number.input";
import EmailInputField from "../input/email.input";
import { Ionicons } from '@expo/vector-icons';
import Spacer from "../free_space";
import { useCreateUserWithEmailAndPassword } from "../../hooks/auth/use.signup";
import useAddNewUser from "../../hooks/auth/use.user";
import ShowToast from "../../utils/toast";
import ErrorHandler from "../../utils/error.handler";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../controllers/redux/slices/user";
// import useSaveUserData from "../../hooks/auth/use.user";

export default function SignupForm() {
    return (
        <View style={{ width: '100%' }}>
            <SignupInputs />
            <OrOptions />
            <AuthOptions />
        </View>
    );
}

const SignupInputs = () => {
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const { addNewUser, loading, error } = useAddNewUser()
    const [showPassword, setShowPassword] = useState(false);
    const [pass, setPass] = useState({ password: "", re_Password: "" });
    const [user, setUserData] = useState({ fName: "", lName: "", phone: "", age: 0, email: "" });

    const onPasswordChange = (name, res) => setPass({ ...pass, [name]: res })
    const onTextChange = (name, res) => setUserData({ ...user, [name]: res })

    const handleBtnPressed = async () => {
        try {
            setLoading(true);
            const res = await useCreateUserWithEmailAndPassword(
                user.email,
                pass.password
            );
            await addNewUser({
                uid: res.user.uid,
                ...user
            });
            dispatch(setUser({ uid: res.user.uid, ...user }));
        } catch (error) { ShowToast(ErrorHandler.login(error)); }
        finally { setLoading(false); }
    };

    if (isLoading) { return <BtnAuthAction value="Loading..." /> }

    return (
        <View style={{ width: '100%' }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginVertical: 2.5 }}>
                <TextInputField
                    name="fName"
                    value={user.fName}
                    placeholder="First Name"
                    onChangeText={onTextChange}
                />
                <Spacer width={5} />
                <TextInputField
                    name="lName"
                    value={user.lName}
                    placeholder="Last Name"
                    onChangeText={onTextChange}
                />
            </View>
            <NumberInputField
                name="phone"
                value={user.phone}
                placeholder="Phone"
                onChangeText={onTextChange}
            />
            <NumberInputField
                name="age"
                placeholder="Age"
                value={user.age}
                onChangeText={onTextChange}
            />
            <EmailInputField
                name="email"
                value={user.email}
                placeholder="Email"
                onChangeText={onTextChange}
            />
            <View style={{ flexDirection: 'row', marginVertical: 2.5, marginBottom: 20 }}>
                <PasswordInputField
                    name="password"
                    isExternal={true}
                    value={user.password}
                    isShown={showPassword}
                    placeholder="Password"
                    onChangeText={onPasswordChange}
                />

                <TouchableOpacity style={{
                    alignContent: 'center',
                    justifyContent: 'center',
                }}
                    onPress={() => setShowPassword(!showPassword)} >
                    <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color="white" />
                </TouchableOpacity>

                <PasswordInputField
                    name="re_Password"
                    isExternal={true}
                    isShown={showPassword}
                    placeholder="Re-Password"
                    onChangeText={onPasswordChange}
                    value={user.confirmPassword}
                />
            </View>
            <BtnAuthAction value="Create New" onPress={handleBtnPressed} />

        </View >
    );
};

const styles = StyleSheet.create({

});

