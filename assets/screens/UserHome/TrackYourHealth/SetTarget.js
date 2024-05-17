import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const SetTarget = () => {
  const navigation = useNavigation(); // navigation 변수 선언

  const [calorieTarget, setCalorieTarget] = useState("");
  const [savedTarget, setSavedTarget] = useState(null);
  const [isEditMode, setIsEditMode] = useState(true);
  const [targetText, setTargetText] = useState("Set your daily Calorie Target");

  useEffect(() => {
    // Load saved calorie target when component mounts
    loadCalorieTarget();
  }, []);

  const loadCalorieTarget = async () => {
    try {
      const storedTarget = await AsyncStorage.getItem("calorieTarget");
      if (storedTarget !== null) {
        setSavedTarget(storedTarget);
        setCalorieTarget(storedTarget); // Set calorieTarget in edit mode for editing
        setTargetText("Your Daily Calorie Target"); // Change the text
        setIsEditMode(false); // Toggle to view mode
      }
    } catch (error) {
      console.error("Error loading calorie target:", error);
    }
  };

  const handleSaveTarget = async () => {
    try {
      // Save the calorie target to asyncStorage
      await AsyncStorage.setItem("calorieTarget", calorieTarget);
      // Update saved target in state
      setSavedTarget(calorieTarget);
      // Toggle to view mode
      setIsEditMode(false);
      setTargetText("Your Daily Calorie Target"); // Change the text
      // Navigate to CheckYourDailyGoal screen and pass calorie target
      navigation.navigate("CheckYourDailyGoal", { calorieGoal: calorieTarget });
    } catch (error) {
      console.error("Error saving calorie target:", error);
    }
  };

  const handleModifyTarget = () => {
    // Toggle back to edit mode
    setIsEditMode(true);
    setTargetText("Set your daily Calorie Target"); // Change the text back to original
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{targetText}</Text>
        {isEditMode ? (
          <TextInput
            style={styles.input}
            placeholder="Please type your daily calorie target"
            value={calorieTarget}
            onChangeText={setCalorieTarget}
            keyboardType="numeric"
          />
        ) : (
          <Text style={styles.savedText}>{savedTarget}</Text>
        )}
        {isEditMode ? (
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSaveTarget}
          >
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.modifyButton}
            onPress={handleModifyTarget}
          >
            <Text style={styles.modifyButtonText}>Modify</Text>
          </TouchableOpacity>
        )}
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
  savedText: {
    fontSize: 16,
    marginBottom: 20,
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
  modifyButton: {
    backgroundColor: "pink",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: "100%",
  },
  modifyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SetTarget;
