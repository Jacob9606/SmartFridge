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

const meatsData = [
  {
    id: "1",
    name: "Chicken",
    kcal: "250 Kcal",
    quantity: 3,
    image: require("./icons/chicken.png"),
  },
  {
    id: "2",
    name: "Beef",
    kcal: "250 Kcal",
    quantity: 4,
    image: require("./icons/beef.png"),
  },
  {
    id: "3",
    name: "Pork",
    kcal: "800 Kcal",
    quantity: 2,
    image: require("./icons/pork.png"),
  },
  // Add more meats as needed
];

const MeatsInventory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const renderMeatItem = ({ item }) => (
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
        <Text>❤️</Text>
      </TouchableOpacity>
    </View>
  );

  const addMeat = () => {
    // Logic to add a new meat to the inventory
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meats Inventory</Text>
      <TextInput
        style={styles.searchBox}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search"
      />
      <FlatList
        data={meatsData.filter((meat) =>
          meat.name.toLowerCase().includes(searchQuery.toLowerCase())
        )}
        renderItem={renderMeatItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.addButton} onPress={addMeat}>
        <Text style={styles.addButtonText}>Add Meats</Text>
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

export default MeatsInventory;
