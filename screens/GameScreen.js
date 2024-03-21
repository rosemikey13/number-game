import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

const generateRandomBetween = (min, max, exclude) => {

  const rndmNum = Math.floor(Math.random() * (max-min)) + min;

  if (rndmNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndmNum;
  }

}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = (props) => {

  
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);


  const nextGuessHandler = (direction) => {

    if ((direction === "lower" && currentGuess < props.userNumber) || (direction === "higher" && currentGuess > props.userNumber)) {
      Alert.alert("Tell the truth","(ಥ﹏ಥ)", [{text: 'Sorry!', style: 'cancel'}]);
      return;
    }

    if (direction === "lower"){
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber =  generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View style={styles.HLButtons}>
        <PrimaryButton pressFunc={nextGuessHandler.bind(this, "higher")}>+</PrimaryButton>
        <PrimaryButton pressFunc={nextGuessHandler.bind(this, "lower")}>-</PrimaryButton>
        </View>
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
  HLButtons:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default GameScreen;
