import { StyleSheet, ImageBackground } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  baclgroundImage: {
    opacity: 0.15,
  },
});

export default function App() {

  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  return (
    <LinearGradient colors={["#4e0329","#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground resizeMode="cover" style={styles.rootScreen} source={require("./assets/splash.png")} imageStyle={styles.baclgroundImage}>
        {
          userNumber ? <GameScreen /> : <StartGameScreen onPickNumber={pickedNumberHandler} />
        }
      </ImageBackground>
    </LinearGradient>
  );
};
