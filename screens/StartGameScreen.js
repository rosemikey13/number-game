import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";

const StartGameScreen = (props) => {
  const [userInput, setUserInput] = useState("");

  const numberInputHandler = (text) => {
    setUserInput(text);
  };

  const resetInputHandler = () => {
    setUserInput("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(userInput);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    props.setUserNumber(userInput);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        value={userInput}
        onChangeText={numberInputHandler}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <PrimaryButton pressFunc={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.inputContainer}>
          <PrimaryButton pressFunc={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 100,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.75,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputsContainer: {
    flexDirection: "row",
  },
  inputContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
