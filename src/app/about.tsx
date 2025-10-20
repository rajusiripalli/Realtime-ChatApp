import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function About() {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-3xl font-bold underline">About!</Text>
            <Link href="/">Go to Home</Link>
        </View>
    )
}