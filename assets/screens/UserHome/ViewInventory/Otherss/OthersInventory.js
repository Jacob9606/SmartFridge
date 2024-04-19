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

const othersData = [
  {
    id: "1",
    name: "Kimchi",
    kcal: "250 Kcal",
    quantity: 2,
    image: require("C:/Users/hp/SmartFridge/assets/images/others.png"),
  },
  {
    id: "2",
    name: "Seafood",
    kcal: "250 Kcal",
    quantity: 4,
    image: require("C:/Users/hp/SmartFridge/assets/images/others.png"),
  },
  {
    id: "3",
    name: "Bibimbap",
    kcal: "800 Kcal",
    quantity: 2,
    image: require("C:/Users/hp/SmartFridge/assets/images/others.png"),
  },
  // Add more items as needed
];

const OthersInventory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const renderOtherItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemKcal}>{item.kcal}</Text>
      <Text style={styles.itemQuantity}>{item.quantity}</Text>
      <TouchableOpacity
        onPress={() => {
          /* Logic to like the item */
        }}
      >
        <Text style={styles.likeIcon}>❤️</Text>
      </TouchableOpacity>
    </View>
  );

  const addOtherItem = () => {
    // Logic to add a new item to the inventory
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Others Inventory</Text>
      <TextInput
        style={styles.searchBox}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search"
      />
      <FlatList
        data={othersData.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )}
        renderItem={renderOtherItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.addButton} onPress={addOtherItem}>
        <Text style={styles.addButtonText}>Add Others</Text>
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
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    marginLeft: 10,
  },
  itemKcal: {
    fontSize: 16,
  },
  itemQuantity: {
    fontSize: 16,
    marginRight: 10,
  },
  likeIcon: {
    fontSize: 24,
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

export default OthersInventory;
