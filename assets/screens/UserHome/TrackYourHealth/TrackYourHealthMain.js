import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const TrackYourHealthMain = ({ navigation }) => {
  const setTarget = () => {
    // Handle the "Set Target" action here
  };

  const checkDailyGoal = () => {
    // Handle the "Check your Daily Goal" action here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Track your Health</Text>
      <Image
        source={require("C:/Users/hp/SmartFridge/assets/images/SmartFridgeLogo.png")}
        style={styles.logo}
      />

      <TouchableOpacity style={styles.button} onPress={setTarget}>
        <Text style={styles.buttonText}>Set Target</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={checkDailyGoal}>
        <Text style={styles.buttonText}>Check your Daily Goal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 50,
  },
  button: {
    backgroundColor: "pink",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TrackYourHealthMain;
