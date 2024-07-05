import { View, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
    return (
        <View>
            <TextInput />
            <PrimaryButton>RESET</PrimaryButton>
            <PrimaryButton>CONFIRM</PrimaryButton>
        </View>
    );
};

export default StartGameScreen;