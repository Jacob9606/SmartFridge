import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const AddDrinks = () => {
  const [drinkData, setDrinkData] = useState({
    productName: "Water",
    quantity: "1",
    expiryDate: "05/04/2024",
    calories: "0",
  });
  const [selectedIcon, setSelectedIcon] = useState("Water");

  const icons = {
    Juice: require("C:/Users/hp/SmartFridge/assets/images/juice.png"),
    Soda: require("C:/Users/hp/SmartFridge/assets/images/coke.png"),
    Milk: require("C:/Users/hp/SmartFridge/assets/images/milk.png"),
    Others: require("C:/Users/hp/SmartFridge/assets/images/others.png"),
  };

  const handleIconSelect = (iconName) => {
    setSelectedIcon(iconName);
  };

  const handleAddDrinks = () => {
    console.log("Added Drinks:", drinkData, "Selected Icon:", selectedIcon);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add Drinks</Text>

      <TextInput
        style={styles.input}
        onChangeText={(text) =>
          setDrinkData({ ...drinkData, productName: text })
        }
        value={drinkData.productName}
        placeholder="Product Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setDrinkData({ ...drinkData, quantity: text })}
        value={drinkData.quantity.toString()}
        placeholder="Quantity"
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) =>
          setDrinkData({ ...drinkData, expiryDate: text })
        }
        value={drinkData.expiryDate}
        placeholder="Expired date"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setDrinkData({ ...drinkData, calories: text })}
        value={drinkData.calories.toString()}
        placeholder="Calories"
        keyboardType="number-pad"
      />

      <Text style={styles.label}>Choose Icon</Text>
      <View style={styles.iconsContainer}>
        {Object.keys(icons).map((iconName) => (
          <TouchableOpacity
            key={iconName}
            onPress={() => handleIconSelect(iconName)}
            style={[
              styles.icon,
              selectedIcon === iconName && styles.selectedIcon,
            ]}
          >
            <Image source={icons[iconName]} style={styles.iconImage} />
            <Text style={styles.iconText}>{iconName}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAddDrinks}>
        <Text style={styles.buttonText}>Add Drinks</Text>
      </TouchableOpacity>
    </ScrollView>
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
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  icon: {
    padding: 10,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  iconImage: {
    width: 60,
    height: 60,
  },
  iconText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
  },
  selectedIcon: {
    borderWidth: 2,
    borderColor: "#ff0000",
    borderRadius: 30,
  },
  button: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default AddDrinks;
