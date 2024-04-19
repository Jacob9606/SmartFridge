import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DailyTarget = () => {
  // Assuming 1800 is the calorie target fetched from state or props
  const calorieTarget = 1800;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daily Target</Text>
      <View style={styles.targetContainer}>
        <Text style={styles.targetLabel}>Your Daily Calorie Target</Text>
        <Text style={styles.targetValue}>{`${calorieTarget} kal`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  targetContainer: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  targetLabel: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
  targetValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});

export default DailyTarget;
