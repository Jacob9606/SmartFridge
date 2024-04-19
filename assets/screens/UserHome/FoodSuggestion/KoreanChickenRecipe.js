import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const KoreanChickenRecipe = () => {
  // Assuming we have an array of instructions, which you could also fetch from an API
  const instructions = [
    "Prepare the vegetables.",
    "Cook the rice.",
    "Something", // Replace with actual instruction steps
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Korean Chicken</Text>
      <Text style={styles.subtitle}>Instruction</Text>
      <View style={styles.instructionContainer}>
        {instructions.map((step, index) => (
          <Text key={index} style={styles.instructionText}>{`${
            index + 1
          }. ${step}`}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 10,
  },
  instructionContainer: {
    backgroundColor: "#f0f0f0",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default KoreanChickenRecipe;
