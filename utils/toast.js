import { ToastAndroid } from "react-native";

export default function ShowToast(msg) {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
}
