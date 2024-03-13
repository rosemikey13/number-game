import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";

const GameScreen = (props) => {

  const generateRandomBetween = (min, max, exclude) => {

    const rndmNum = Math.floor(Math.random() * (max-min)) + min;

    if (rndmNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndmNum;
    }

  }
  const initialGuess = generateRandomBetween(1, 100, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        {/* + - */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
