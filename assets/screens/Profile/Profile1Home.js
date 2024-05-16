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
  // Navigation functions to navigate to different screens
  const navigateToSuggestion = () => {
    navigation.navigate("Suggestion");
  };

  const navigateToShoppingList = () => {
    navigation.navigate("ShoppingList");
  };

  const navigateToTrackYourHealthMain = () => {
    navigation.navigate("TrackYourHealthMain");
  };

  const navigateToGenerateAReport = () => {
    navigation.navigate("GenerateAReport");
  };

  // Navigation function to navigate to FruitsInventory
  const navigateToFoodInventoryMain = () => {
    navigation.navigate("FruitsInventory");
  };

  // Navigation function to navigate to JacobProfile
  const navigateToJacobProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Icon */}
      <TouchableOpacity
        style={styles.profileIconContainer}
        onPress={navigateToJacobProfile}
      >
        <Image
          source={require("../../../assets/images/profileIcon.png")}
          style={styles.profileIcon}
        />
      </TouchableOpacity>

      <Image
        source={require("../../../assets/images/SmartFridgeLogo.png")}
        style={styles.logo}
      />

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToFoodInventoryMain}
        >
          <Text style={styles.buttonText}>View Inventory</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToSuggestion}>
          <Text style={styles.buttonText}>Food Suggestion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToShoppingList}
        >
          <Text style={styles.buttonText}>Check Shopping List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToTrackYourHealthMain}
        >
          <Text style={styles.buttonText}>Track your Health</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToGenerateAReport}
        >
          <Text style={styles.buttonText}>Generate Reports</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Menu */}
      <View style={styles.bottomMenu}>
        <Image
          source={require("../../../assets/images/search.png")}
          style={styles.bottomMenuIcon}
        />
        <Image
          source={require("../../../assets/images/SmartFridgeHomeButton.png")}
          style={styles.bottomMenuIcon}
        />
        <Image
          source={require("../../../assets/images/heart.png")}
          style={styles.bottomMenuIcon}
        />
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
  profileIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  profileIcon: {
    width: 30,
    height: 30,
  },
  logo: {
    width: 200,
    height: 200,
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
    borderRadius: 30,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  bottomMenuIcon: {
    width: 30,
    height: 30,
  },
});

export default Profile1Home;
