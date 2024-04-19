import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";

const drinksData = [
  {
    id: "1",
    name: "Juice",
    kcal: "250 Kcal",
    quantity: 3,
    image: require("C:/Users/hp/SmartFridge/assets/images/juice.png"),
  },
  {
    id: "2",
    name: "Coke",
    kcal: "250 Kcal",
    quantity: 4,
    image: require("C:/Users/hp/SmartFridge/assets/images/coke.png"),
  },
  {
    id: "3",
    name: "Milk",
    kcal: "800 Kcal",
    quantity: 2,
    image: require("C:/Users/hp/SmartFridge/assets/images/milk.png"),
  },
  // Add more drinks as necessary
];

const DrinksInventory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const renderDrinkItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemKcal}>{item.kcal}</Text>
      <Text style={styles.itemQuantity}>{item.quantity}</Text>
      <TouchableOpacity
        onPress={() => {
          /* Handle liking the drink */
        }}
      >
        <Text style={styles.heartIcon}>❤️</Text>
      </TouchableOpacity>
    </View>
  );

  const addDrink = () => {
    // Logic to add a new drink to the inventory
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Drinks Inventory</Text>
      <TextInput
        style={styles.searchBox}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search"
      />
      <FlatList
        data={drinksData.filter((drink) =>
          drink.name.toLowerCase().includes(searchQuery.toLowerCase())
        )}
        renderItem={renderDrinkItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.addButton} onPress={addDrink}>
        <Text style={styles.addButtonText}>Add Drinks</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  searchBox: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemName: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  itemKcal: {
    fontSize: 16,
  },
  itemQuantity: {
    marginRight: 10,
    fontSize: 16,
  },
  heartIcon: {
    fontSize: 24,
    color: "pink",
  },
  addButton: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    margin: 20,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default DrinksInventory;
