import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CheckYourDailyGoal = () => {
  // These values would normally come from your app's state or a backend
  const calorieGoal = 1800;
  const caloriesConsumed = 1200;
  const caloriesLeft = calorieGoal - caloriesConsumed;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Check your Daily Goal</Text>
      <View style={styles.statsContainer}>
        <Text style={styles.title}>Calories</Text>
        <View style={styles.separator} />
        <Text style={styles.stat}>Goal: {calorieGoal} kal</Text>
        <Text style={styles.stat}>Total: {caloriesConsumed} kal</Text>
        <Text style={styles.stat}>Left: {caloriesLeft} kal</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  statsContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: 30,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginVertical: 10,
  },
  stat: {
    fontSize: 18,
    marginVertical: 4,
  },
});

export default CheckYourDailyGoal;
