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

const vegetablesData = [
  {
    id: "1",
    name: "Carrots",
    kcal: "250 Kcal",
    quantity: 3,
    expiryDate: "01/04",
  },
  {
    id: "2",
    name: "Tomato",
    kcal: "250 Kcal",
    quantity: 2,
    expiryDate: "01/04",
  },
  {
    id: "3",
    name: "Cabbage",
    kcal: "250 Kcal",
    quantity: 3,
    expiryDate: "01/04",
  },
  // Add more vegetables here
];

const VegetablesInventory = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const renderVegetableItem = ({ item }) => (
    <View style={styles.vegetableItem}>
      {item.name === "Carrots" && (
        <Image
          source={require("../../../../images/carrot.png")}
          style={styles.vegetableImage}
        />
      )}
      {item.name === "Tomato" && (
        <Image
          source={require("../../../../images/tomato.png")}
          style={styles.vegetableImage}
        />
      )}
      {item.name === "Cabbage" && (
        <Image
          source={require("../../../../images/cabbage.png")}
          style={styles.vegetableImage}
        />
      )}
      <View style={styles.vegetableDetails}>
        <Text style={styles.vegetableName}>{item.name}</Text>
        <Text style={styles.vegetableInfo}>{item.kcal}</Text>
        <Text style={styles.vegetableInfo}>
          Expired date: {item.expiryDate}
        </Text>
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

  const addVegetables = () => {
    navigation.navigate("AddVegetables");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vegetables Inventory</Text>
      <TextInput
        style={styles.searchBox}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search"
      />
      <FlatList
        data={vegetablesData}
        renderItem={renderVegetableItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.addButton} onPress={addVegetables}>
        <Text style={styles.addButtonText}>Add Vegetables</Text>
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
  vegetableItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  vegetableImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  vegetableDetails: {
    marginLeft: 10,
    flex: 1,
  },
  vegetableName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  vegetableInfo: {
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

export default VegetablesInventory;
