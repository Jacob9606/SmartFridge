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

const saucesData = [
  {
    id: "1",
    name: "soySauce",
    kcal: "250 Kcal",
    quantity: 3,
    expiryDate: "01/04",
  },
  {
    id: "2",
    name: "ketchup",
    kcal: "250 Kcal",
    quantity: 2,
    expiryDate: "01/04",
  },
  {
    id: "3",
    name: "mustard",
    kcal: "250 Kcal",
    quantity: 3,
    expiryDate: "01/04",
  },
  // Add more sauces here
];

const SauceInventory = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const renderSauceItem = ({ item }) => (
    <View style={styles.sauceItem}>
      {item.name === "soySauce" && (
        <Image
          source={require("../../../../images/soySauce.png")}
          style={styles.sauceImage}
        />
      )}
      {item.name === "ketchup" && (
        <Image
          source={require("../../../../images/ketchup.png")}
          style={styles.sauceImage}
        />
      )}
      {item.name === "mustard" && (
        <Image
          source={require("../../../../images/mustard.png")}
          style={styles.sauceImage}
        />
      )}
      <View style={styles.sauceDetails}>
        <Text style={styles.sauceName}>{item.name}</Text>
        <Text style={styles.sauceInfo}>{item.kcal}</Text>
        <Text style={styles.sauceInfo}>Expired date: {item.expiryDate}</Text>
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

  const addSauce = () => {
    navigation.navigate("AddSauce");
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
        data={saucesData}
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
  sauceItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  sauceImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  sauceDetails: {
    marginLeft: 10,
    flex: 1,
  },
  sauceName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  sauceInfo: {
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

export default SauceInventory;
