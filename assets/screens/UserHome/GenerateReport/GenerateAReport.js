import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

const GenerateAReport = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const generateReport = () => {
    // Logic to generate report based on selected dates
    console.log("Report generated from", startDate, "to", endDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daily Report</Text>
      <View style={styles.inputContainer}></View>
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
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    height: "40%",
    backgroundColor: "pink",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 30,
    alignItems: "center",
    marginBottom: 20,
  },
  inputLabel: {
    alignSelf: "flex-start",
    marginLeft: 10,
    color: "#333",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    backgroundColor: "pink",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default GenerateAReport;
