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
import { useNavigation } from "@react-navigation/native";

const drinksData = [
  {
    id: "1",
    name: "juice",
    kcal: "250 Kcal",
    quantity: 3,
    expiryDate: "01/04",
  },
  {
    id: "2",
    name: "coke",
    kcal: "250 Kcal",
    quantity: 2,
    expiryDate: "01/04",
  },
  {
    id: "3",
    name: "milk",
    kcal: "250 Kcal",
    quantity: 3,
    expiryDate: "01/04",
  },
  // Add more drinks here
];

const DrinksInventory = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const renderDrinkItem = ({ item }) => (
    <View style={styles.drinkItem}>
      {item.name === "juice" && (
        <Image
          source={require("../../../../images/juice.png")}
          style={styles.drinkImage}
        />
      )}
      {item.name === "coke" && (
        <Image
          source={require("../../../../images/coke.png")}
          style={styles.drinkImage}
        />
      )}
      {item.name === "milk" && (
        <Image
          source={require("../../../../images/milk.png")}
          style={styles.drinkImage}
        />
      )}
      <View style={styles.drinkDetails}>
        <Text style={styles.drinkName}>{item.name}</Text>
        <Text style={styles.drinkInfo}>{item.kcal}</Text>
        <Text style={styles.drinkInfo}>Expired date: {item.expiryDate}</Text>
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

  const addDrinks = () => {
    navigation.navigate("AddDrinks");
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
        data={drinksData}
        renderItem={renderDrinkItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.addButton} onPress={addDrinks}>
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
  drinkItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  drinkImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  drinkDetails: {
    marginLeft: 10,
    flex: 1,
  },
  drinkName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  drinkInfo: {
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

export default DrinksInventory;
