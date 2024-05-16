import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getEmail } from "../../../clientStorage";
import { BASE_URL } from "../../../../../config";

const SetUpFruits = ({ route }) => {
  const navigation = useNavigation();
  const { fruitData, selectedIcon } = route.params;
  const [crucial, setIsCritical] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [email, setEmail] = useState(null);

  useEffect(() => {
    async function fetchEmail() {
      const userEmail = await getEmail();
      setEmail(userEmail);
    }
    fetchEmail();

    // Log fruitsData when it's available
    console.log("fruitsData:", fruitData);
  }, [fruitData]); // useEffect will run whenever fruitData changes

  // Log the selection of Critical Item and the Quantity set
  useEffect(() => {
    if (crucial !== null) {
      console.log("Critical Item Selected:", crucial ? "Yes" : "No");
    }
    if (crucial && quantity) {
      console.log("Quantity for the alarm:", quantity);
    }
  }, [crucial, quantity]);

  const handleAddFruits = () => {
    // Check if email is available
    if (!email) {
      alert("Email is not available.");
      return;
    }

    // Check if isCritical and quantity are appropriately set
    if (crucial === null || (!crucial && !quantity)) {
      alert("Please fill in all fields.");
      return;
    }

    // Create userData object
    const userData = {
      ...fruitData,
      selectedIcon: selectedIcon,
      crucial: crucial,
      email: email, // Include user's email
    };

    // Add quantity to userData if isCritical
    if (crucial) {
      userData.quantity = parseInt(quantity);
    }

    // Log fruitsData, isCritical, and quantity when Add Fruits button is pressed
    console.log("fruitsData on Add Fruits button press:", fruitData);
    console.log("Is it a Critical Item on Add Fruits button press:", crucial);
    console.log("Quantity on Add Fruits button press:", quantity);

    // Send POST request to add fruits
    fetch(BASE_URL + `/users/${email}/additem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fruits added successfully:", data);
        navigation.navigate("FruitsInventory");
      })
      .catch((error) => {
        console.error("Error adding fruits:", error);
        alert("Failed to add fruits. Please try again later.");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Set Up Fruits</Text>

      <Text style={styles.questionText}>Is it Critical Item?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.choiceButton,
            crucial === true && styles.selectedButton,
          ]}
          onPress={() => setIsCritical(true)}
        >
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.choiceButton,
            crucial === false && styles.selectedButton,
          ]}
          onPress={() => setIsCritical(false)}
        >
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>

      {crucial && (
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

      <TouchableOpacity
        style={styles.addFruitsButton}
        onPress={handleAddFruits}
      >
        <Text style={styles.addFruitsButtonText}>Add Fruits</Text>
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
    backgroundColor: "#c2f0c2",
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

export default SetUpFruits;
