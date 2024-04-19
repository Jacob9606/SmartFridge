import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Profile1Home = ({ navigation }) => {
  // Replace the following functions with navigation logic or other functionality
  const viewInventory = () => console.log("View Inventory");
  const foodSuggestion = () => console.log("Food Suggestion");
  const checkShoppingList = () => console.log("Check Shopping List");
  const trackYourHealth = () => console.log("Track Your Health");
  const generateReports = () => console.log("Generate Reports");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: "path_to_your_smart_fridge_logo" }} // Replace with your local image
        style={styles.logo}
      />
      <Text style={styles.title}>SMART FRIDGE</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.button} onPress={viewInventory}>
          <Text style={styles.buttonText}>View Inventory</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={foodSuggestion}>
          <Text style={styles.buttonText}>Food Suggestion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={checkShoppingList}>
          <Text style={styles.buttonText}>Check Shopping List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={trackYourHealth}>
          <Text style={styles.buttonText}>Track your Health</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={generateReports}>
          <Text style={styles.buttonText}>Generate Reports</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  menuContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Profile1Home;
