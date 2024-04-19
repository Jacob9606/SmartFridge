import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const initialItems = [
  { id: "1", name: "Cabbage" },
  { id: "2", name: "Milk" },
  { id: "3", name: "Rice" },
  // ... other items
];

const ShoppingList = () => {
  const [items, setItems] = useState(initialItems);

  const markItemBought = (id) => {
    // Logic to mark an item as bought
    console.log("Item marked as bought:", id);
  };

  const deleteItem = (id) => {
    // Logic to delete an item from the list
    console.log("Item deleted:", id);
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <TouchableOpacity
        onPress={() => markItemBought(item.id)}
        style={styles.actionButton}
      >
        <Text>✓</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => deleteItem(item.id)}
        style={styles.actionButton}
      >
        <Text>🗑</Text>
      </TouchableOpacity>
    </View>
  );

  const addItemToList = () => {
    // Logic to add an item to the list
    console.log("Add item to the list");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shopping List</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.addButton} onPress={addItemToList}>
        <Text style={styles.addButtonText}>Add Shopping List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  itemName: {
    fontSize: 18,
  },
  actionButton: {
    marginHorizontal: 10,
    padding: 8,
  },
  addButton: {
    backgroundColor: "pink",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 20,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ShoppingList;
