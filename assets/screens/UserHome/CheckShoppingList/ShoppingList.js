import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

const initialItems = [
  { id: "1", name: "Cabbage", checked: false },
  { id: "2", name: "Milk", checked: false },
  { id: "3", name: "Rice", checked: false },
  // ... other items
];

const ShoppingList = () => {
  const [items, setItems] = useState(initialItems);
  const [newItemName, setNewItemName] = useState("");

  const markItemBought = (id) => {
    // Logic to mark an item as bought

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const deleteItem = (id) => {
    // Logic to delete an item from the list
    console.log("Item deleted:", id);
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={[styles.itemName, item.checked && styles.checkedItemName]}>
        {item.name}
      </Text>
      <TouchableOpacity
        onPress={() => markItemBought(item.id)}
        style={[styles.actionButton, item.checked && styles.checkedAction]}
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
    if (newItemName.trim() === "") {
      return; // Don't add empty item
    }
    const newItem = {
      id: String(items.length + 1),
      name: newItemName,
      checked: false,
    };
    setItems([...items, newItem]);
    setNewItemName(""); // Clear input field after adding item
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shopping List</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter item name"
          value={newItemName}
          onChangeText={setNewItemName}
        />
        <TouchableOpacity style={styles.addButton} onPress={addItemToList}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
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
  checkedItemName: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
  actionButton: {
    marginHorizontal: 10,
    padding: 8,
  },
  checkedAction: {
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  addButton: {
    backgroundColor: "pink",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ShoppingList;
