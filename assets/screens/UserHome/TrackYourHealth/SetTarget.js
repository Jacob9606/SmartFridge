import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SetTarget = () => {
  const [calorieTarget, setCalorieTarget] = useState("");

  const handleSaveTarget = () => {
    // Save the calorie target to state, send to a server or store in local storage
    console.log("Calorie target saved:", calorieTarget);
    // Implement the save functionality
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Set Target</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Set your daily Calorie Target</Text>
        <TextInput
          style={styles.input}
          placeholder="Please type your daily calorie target"
          value={calorieTarget}
          onChangeText={setCalorieTarget}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveTarget}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    marginBottom: 20,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "pink",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: "100%",
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SetTarget;
