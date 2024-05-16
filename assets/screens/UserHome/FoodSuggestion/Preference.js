import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const preferences = [
  {
    id: "1",
    title: "Asian",
    image: require("../../../images/Asian.png"), // Replace with your local image path
  },
  {
    id: "2",
    title: "Western",
    image: require("../../../images/Western.png"), // Replace with your local image path
  },
  // ... add more preferences as needed
];

const Preference = () => {
  const [selectedPreference, setSelectedPreference] = useState(null);
  const navigation = useNavigation();

  const handlePreferenceSelection = (id) => {
    setSelectedPreference(id);
  };

  const handleNext = () => {
    navigation.navigate("DietaryRestriction");
  };

  const renderPreferenceItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.preferenceItem,
        selectedPreference === item.id && styles.selectedPreference,
      ]}
      onPress={() => handlePreferenceSelection(item.id)}
    >
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.preferenceImage} />
      </View>
      <Text style={styles.preferenceTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Preference</Text>
      <FlatList
        data={preferences}
        renderItem={renderPreferenceItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNext}
        disabled={!selectedPreference} // Disable the button if no preference is selected
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  preferenceItem: {
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
    margin: 10,
    elevation: 2, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    borderRadius: 50,
    overflow: "hidden",
    marginBottom: 10,
  },
  preferenceImage: {
    width: 100,
    height: 100,
  },
  preferenceTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  selectedPreference: {
    borderColor: "blue",
    borderWidth: 2,
  },
  nextButton: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 5,
    position: "absolute", // Next button is positioned at the bottom of the screen
    bottom: 20,
    width: "90%",
    opacity: 0.7, // Dim the button when disabled
  },
  nextButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Preference;
