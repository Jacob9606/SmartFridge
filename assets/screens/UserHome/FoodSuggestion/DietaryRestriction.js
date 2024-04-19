import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const dietaryOptions = [
  { id: "milk", name: "milk", image: require("../../../images/milk.png") },
  { id: "eggs", name: "eggs", image: require("../../../images/eggs.png") },
  {
    id: "treeNuts",
    name: "treeNuts",
    image: require("../../../images/treeNuts.png"),
  },
  { id: "soy", name: "soy", image: require("../../../images/soy.png") },
  {
    id: "peanuts",
    name: "peanuts",
    image: require("../../../images/peanuts.png"),
  },
  { id: "fish", name: "fish", image: require("../../../images/fish.png") },
  { id: "wheat", name: "wheat", image: require("../../../images/wheat.png") },
  {
    id: "shellfish",
    name: "shellfish",
    image: require("../../../images/shellfish.png"),
  },
];

const DietaryRestriction = () => {
  const [selectedRestrictions, setSelectedRestrictions] = useState(new Set());

  const toggleRestriction = (id) => {
    const newRestrictions = new Set(selectedRestrictions);
    if (newRestrictions.has(id)) {
      newRestrictions.delete(id);
    } else {
      newRestrictions.add(id);
    }
    setSelectedRestrictions(newRestrictions);
  };

  const setDietaryRestrictions = () => {
    // Here, you would handle saving the restrictions to your state or backend
    console.log("Selected restrictions:", Array.from(selectedRestrictions));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Dietary restriction</Text>
      <View style={styles.restrictionsContainer}>
        {dietaryOptions.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.restrictionItem,
              selectedRestrictions.has(item.id) &&
                styles.selectedRestrictionItem,
            ]}
            onPress={() => toggleRestriction(item.id)}
          >
            <Image source={item.image} style={styles.icon} />
            <Text style={styles.restrictionName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={setDietaryRestrictions}>
        <Text style={styles.buttonText}>Set Dietary restriction</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  restrictionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  restrictionItem: {
    padding: 10,
    alignItems: "center",
    margin: 5,
  },
  selectedRestrictionItem: {
    backgroundColor: "#ffdada", // Highlight color for selected items
  },
  icon: {
    width: 60,
    height: 60,
  },
  restrictionName: {
    marginTop: 8,
    textAlign: "center",
  },
  button: {
    backgroundColor: "pink",
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default DietaryRestriction;
