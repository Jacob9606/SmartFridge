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

const sauceData = [
  {
    id: "1",
    name: "Soy Sauce",
    kcal: "250 Kcal",
    quantity: 3,
    image: require("C:/Users/hp/SmartFridge/assets/images/soySauce.png"), // 경로 수정
  },
  {
    id: "2",
    name: "Ketchup",
    kcal: "250 Kcal",
    quantity: 4,
    image: require("C:/Users/hp/SmartFridge/assets/images/ketchup.png"),
  },
  {
    id: "3",
    name: "Mustard",
    kcal: "800 Kcal",
    quantity: 2,
    image: require("C:/Users/hp/SmartFridge/assets/images/mustard.png"),
  },
  // Add more sauces as needed
];

const SauceInventory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const renderSauceItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.itemKcal}>{item.kcal}</Text>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemQuantity}>{item.quantity}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          /* Handle liking the sauce */
        }}
      >
        <Text style={styles.likeIcon}>❤️</Text>
      </TouchableOpacity>
    </View>
  );

  const addSauce = () => {
    // Logic to add a new sauce to the inventory
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sauce Inventory</Text>
      <TextInput
        style={styles.searchBox}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search"
      />
      <FlatList
        data={sauceData.filter((sauce) =>
          sauce.name.toLowerCase().includes(searchQuery.toLowerCase())
        )}
        renderItem={renderSauceItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.addButton} onPress={addSauce}>
        <Text style={styles.addButtonText}>Add Sauce</Text>
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
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemKcal: {
    fontSize: 16,
  },
  itemQuantity: {
    fontSize: 16,
    marginTop: 5,
  },
  likeIcon: {
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

export default SauceInventory;
