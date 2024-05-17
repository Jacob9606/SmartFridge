import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";

const { width, height } = Dimensions.get("window");

const DashBoard = ({ navigation }) => {
  const navigateToRecipe = () => {
    navigation.navigate("Recipe");
  };
  const navigateToSuggestion = () => {
    navigation.navigate("Suggestion");
  };

  const navigateToShoppingList = () => {
    navigation.navigate("ShoppingList");
  };

  // const navigateToTrackYourHealthMain = () => {
  //   navigation.navigate("TrackYourHealthMain");
  // };

  const navigateToGenerateAReport = () => {
    navigation.navigate("GenerateAReport");
  };

  const navigateToFoodInventoryMain = () => {
    navigation.navigate("FruitsInventory");
  };

  const navigateToJacobProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>Current: 27°C</Text>
          <Text style={styles.weatherText}>Sunday, 16 July</Text>
          <Image
            source={require("../../../assets/images/sun.png")}
            style={styles.weatherIcon}
          />
          <TouchableOpacity
            style={styles.profileIconContainer}
            onPress={navigateToJacobProfile}
          >
            <Image
              source={require("../../../assets/images/profileIcon.png")}
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <View style={styles.mealSuggestionContainer}>
            <Text style={styles.mealTitle}>Meal Suggestion</Text>
            <View style={styles.mealItem}>
              <Image
                source={require("../../../assets/images/burger.png")}
                style={styles.mealImage}
              />
              <View style={styles.mealDetails}>
                <Text style={styles.mealText}>Calories: 352</Text>
                <Text style={styles.mealText}>Burgers</Text>
                <TouchableOpacity style={styles.recipeButton}>
                  <Text
                    style={styles.recipeButtonText}
                    onPress={navigateToRecipe}
                  >
                    View Recipe
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.mealItem}>
              <Image
                source={require("../../../assets/images/salad.png")}
                style={styles.mealImage}
              />
              <View style={styles.mealDetails}>
                <Text style={styles.mealText}>Calories: 250</Text>
                <Text style={styles.mealText}>Salad</Text>
                <TouchableOpacity style={styles.recipeButton}>
                  <Text
                    style={styles.recipeButtonText}
                    onPress={navigateToRecipe}
                  >
                    View Recipe
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.temperatureContainer}>
            <Text style={styles.temperatureHeader}>Fridge</Text>
            <Text style={styles.temperatureText}>16°C</Text>
          </View>
        </View>

        <View style={styles.lowStockContainer}>
          <Text style={styles.lowStockTitle}>Low Stock Alarm</Text>
          {[...Array(4)].map((_, index) => (
            <View key={index} style={styles.lowStockItem}>
              <View>
                <Text style={styles.lowStockText}>Apple</Text>
                <Text style={styles.lowStockText}>
                  Expired date: 05/12/2024
                </Text>
              </View>
              <Text style={styles.stockQuantity}>3</Text>
            </View>
          ))}
        </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToFoodInventoryMain}
          >
            <Text style={styles.buttonText}>View Inventory</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToSuggestion}
          >
            <Text style={styles.buttonText}>Food Suggestion</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToShoppingList}
          >
            <Text style={styles.buttonText}>Check Shopping List</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.button}
            onPress={navigateToTrackYourHealthMain}
          >
            <Text style={styles.buttonText}>Track your Health</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToGenerateAReport}
          >
            <Text style={styles.buttonText}>Generate Reports</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    alignItems: "center",
    paddingVertical: 20,
  },
  weatherContainer: {
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
    position: "relative",
  },
  weatherText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  profileIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  mealSuggestionContainer: {
    flex: 2,
    backgroundColor: "#f8c8d8",
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  mealItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  mealImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  mealDetails: {
    flex: 1,
  },
  mealText: {
    fontSize: 14,
  },
  recipeButton: {
    backgroundColor: "#000",
    borderRadius: 5,
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  recipeButtonText: {
    color: "#fff",
    fontSize: 12,
  },
  temperatureContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8c8d8",
    borderRadius: 15,
    padding: 10,
  },
  temperatureText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  temperatureHeader: {
    fontSize: 25,
    fontWeight: "bold",
  },
  lowStockContainer: {
    backgroundColor: "#f8c8d8",
    borderRadius: 15,
    padding: 10,
    width: "90%",
    marginBottom: 20,
  },
  lowStockTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  lowStockItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffebee",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  lowStockText: {
    fontSize: 14,
  },
  stockQuantity: {
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 30,
    marginBottom: 10,
    alignItems: "center",
    width: "100%",
  },
  menuContainer: {
    width: "90%",
    alignItems: "center",
  },
  profileIcon: {
    width: 30,
    height: 30,
  },
});

export default DashBoard;
