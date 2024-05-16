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

const meatsData = [
  {
    id: "1",
    name: "Chicken",
    kcal: "250 Kcal",
    quantity: 3,
    expiryDate: "01/04",
  },
  {
    id: "2",
    name: "Beef",
    kcal: "250 Kcal",
    quantity: 2,
    expiryDate: "01/04",
  },
  {
    id: "3",
    name: "Pork",
    kcal: "250 Kcal",
    quantity: 3,
    expiryDate: "01/04",
  },
  // Add more meats here
];

const MeatsInventory = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const renderMeatItem = ({ item }) => (
    <View style={styles.meatItem}>
      {item.name === "Chicken" && (
        <Image
          source={require("../../../../images/chicken.png")}
          style={styles.meatImage}
        />
      )}
      {item.name === "Beef" && (
        <Image
          source={require("../../../../images/beef.png")}
          style={styles.meatImage}
        />
      )}
      {item.name === "Pork" && (
        <Image
          source={require("../../../../images/pork.png")}
          style={styles.meatImage}
        />
      )}
      <View style={styles.meatDetails}>
        <Text style={styles.meatName}>{item.name}</Text>
        <Text style={styles.meatInfo}>{item.kcal}</Text>
        <Text style={styles.meatInfo}>Expired date: {item.expiryDate}</Text>
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

  const addMeats = () => {
    navigation.navigate("AddMeats");
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
        data={meatsData}
        renderItem={renderMeatItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.addButton} onPress={addMeats}>
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
  meatItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  meatImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  meatDetails: {
    marginLeft: 10,
    flex: 1,
  },
  meatName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  meatInfo: {
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

export default MeatsInventory;
