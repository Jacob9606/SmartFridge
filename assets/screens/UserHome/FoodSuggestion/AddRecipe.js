import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddRecipe = () => {
  const [foodName, setFoodName] = useState("");
  const [instructions, setInstructions] = useState("");
  const navigation = useNavigation();

  const submitRecipe = () => {
    // Logic for what happens when you press "Add Recipe" goes here.
    // Typically this would involve validating the input and then saving the recipe to a database or state.
    console.log("Recipe submitted:", { foodName, instructions });
    // Navigate back to Suggestion screen after submitting recipe
    navigation.navigate("Suggestion");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add Recipe</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Food Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={setFoodName}
          value={foodName}
          placeholder="Please type the Food Name"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Add Instruction</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          onChangeText={setInstructions}
          value={instructions}
          placeholder="Please type the Recipe"
          multiline
          numberOfLines={10} // Adjust the number of lines as needed
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={submitRecipe}>
        <Text style={styles.submitButtonText}>Add Recipe</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  inputContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  multilineInput: {
    paddingTop: 10,
    textAlignVertical: "top", // align text to the top on Android
  },
  submitButton: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default AddRecipe;
