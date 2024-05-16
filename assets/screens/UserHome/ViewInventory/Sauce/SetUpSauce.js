import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // React Navigation에서 useNavigation 가져오기

const SetUpSauce = () => {
  const navigation = useNavigation(); // 내비게이션 객체 가져오기
  const [isCritical, setIsCritical] = useState(null);
  const [quantity, setQuantity] = useState("");

  const handleAddSauce = () => {
    // Logic to add sauces with the specified critical status and quantity
    console.log(
      "Adding sauces with quantity:",
      quantity,
      "Critical:",
      isCritical
    );
    navigation.navigate("SauceInventory"); // SauceInventory로 이동
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Set Up Sauces</Text>

      <Text style={styles.questionText}>Is it Critical Item?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.choiceButton,
            isCritical === true && styles.selectedButton,
          ]}
          onPress={() => setIsCritical(true)}
        >
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.choiceButton,
            isCritical === false && styles.selectedButton,
          ]}
          onPress={() => setIsCritical(false)}
        >
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>

      {isCritical && (
        <>
          <Text style={styles.questionText}>Set Quantity for the alarm</Text>
          <TextInput
            style={styles.quantityInput}
            placeholder="Type the quantity"
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
          />
        </>
      )}

      <TouchableOpacity style={styles.addFruitsButton} onPress={handleAddSauce}>
        <Text style={styles.addFruitsButtonText}>Add Sauces</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  choiceButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },
  selectedButton: {
    backgroundColor: "#c2f0c2", // Or any color to indicate selection
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
  },
  quantityInput: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
  },
  addFruitsButton: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  addFruitsButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SetUpSauce;
