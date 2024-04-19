import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
} from "react-native";

const fruitsData = [
  {
    id: "1",
    name: "apple",
    kcal: "250 Kcal",
    quantity: 3,
    expiryDate: "01/04",
  },
  {
    id: "2",
    name: "strawberry",
    kcal: "250 Kcal",
    quantity: 2,
    expiryDate: "01/04",
  },
  {
    id: "3",
    name: "lemon",
    kcal: "250 Kcal",
    quantity: 3,
    expiryDate: "01/04",
  },
  // Add more fruits here
];

const FruitsInventory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const renderFruitItem = ({ item }) => (
    <View style={styles.fruitItem}>
      {item.name === "apple" && (
        <Image
          source={require("C:/Users/hp/SmartFridge/assets/images/apple.png")}
          style={styles.fruitImage}
        />
      )}
      {item.name === "lemon" && (
        <Image
          source={require("C:/Users/hp/SmartFridge/assets/images/lemon.png")}
          style={styles.fruitImage}
        />
      )}
      {item.name === "strawberry" && (
        <Image
          source={require("C:/Users/hp/SmartFridge/assets/images/strawberry.png")}
          style={styles.fruitImage}
        />
      )}
      <View style={styles.fruitDetails}>
        <Text style={styles.fruitName}>{item.name}</Text>
        <Text style={styles.fruitInfo}>{item.kcal}</Text>
        <Text style={styles.fruitInfo}>Expired date: {item.expiryDate}</Text>
      </View>
      <Text style={styles.quantity}>{item.quantity}</Text>
      <TouchableOpacity
        onPress={() => {
          /* Logic to mark as bought */
        }}
      >
        <Text>✓</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          /* Logic to delete item */
        }}
      >
        <Text>🗑</Text>
      </TouchableOpacity>
    </View>
  );

  const addFruit = () => {
    // Logic to add a new fruit to the inventory
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fruits Inventory</Text>
      <TextInput
        style={styles.searchBox}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search"
      />
      <FlatList
        data={fruitsData}
        renderItem={renderFruitItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.addButton} onPress={addFruit}>
        <Text style={styles.addButtonText}>Add Fruits</Text>
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
    marginBottom: 10,
  },
  searchBox: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  fruitItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  fruitImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  fruitDetails: {
    marginLeft: 10,
    flex: 1,
  },
  fruitName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  fruitInfo: {
    fontSize: 16,
  },
  quantity: {
    marginRight: 10,
    fontSize: 18,
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

export default FruitsInventory;
