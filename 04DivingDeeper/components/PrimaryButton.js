import { View, Text, Pressable, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonInnerContainer: {
        backgroundColor: "#72063c",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
});

const PrimaryButton = ({ children }) => {

    const pressHandler = () => {
        console.log("Button pressed");
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={pressHandler} style={({pressed}) => pressed ? [styles.buttonInnerContainer ,styles.pressed] : styles.buttonInnerContainer} android_ripple={{ color: "#640233" }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;