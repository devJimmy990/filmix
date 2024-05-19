import { View } from "react-native";

export default function Spacer({ width = 0, height = 0 }) {
    return (
        <View style={{ width: width, height: height }} />
    )
}