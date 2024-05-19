import { TextInput } from "react-native-paper";

export default function IconInputField({ name }) {
    return (
        <TextInput.Icon name={name} />
    );
}