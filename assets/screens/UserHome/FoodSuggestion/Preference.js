import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

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

const Preference = ({ navigation }) => {
  const renderPreferenceItem = ({ item }) => (
    <View style={styles.preferenceItem}>
      <Image source={item.image} style={styles.preferenceImage} />
      <Text style={styles.preferenceTitle}>{item.title}</Text>
    </View>
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
        style={styles.addButton}
        onPress={() => {
          /* logic for adding a recipe */
        }}
      >
        <Text style={styles.addButtonText}>Add Recipe</Text>
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
  preferenceImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  preferenceTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  addButton: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 5,
    position: "absolute", // Add Recipe button is positioned at the bottom of the screen
    bottom: 20,
    width: "90%",
  },
  addButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Preference;
