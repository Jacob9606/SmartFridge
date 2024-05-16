import React, { useState, useEffect } from "react";
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
import { getEmail } from "../clientStorage";
import { BASE_URL } from "../../../config";

const TestAlarm = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [fruitsData, setFruitsData] = useState([]); // Moved state declaration here

  useEffect(() => {
    fetchFruitsData();
  }, []);

  const fetchFruitsData = async () => {
    try {
      const emailId = await getEmail();
      console.log(BASE_URL + `/users/${emailId}/inventory`);
      const response = await fetch(BASE_URL + `/users/${emailId}/inventory`);
      if (!response.ok) {
        throw new Error("Fetching profile was not ok");
      }
      const data = await response.json();
      const filteredData = data.filter(
        (item) => item.crucial && item.lowAlaryQuantity <= item.quantity
      );
      setFruitsData(filteredData); // Set fruitsData state here
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  const renderFruitItem = ({ item }) => (
    <View style={styles.fruitItem}>
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
      ></TouchableOpacity>
    </View>
  );

  const addFruit = () => {
    navigation.navigate("AddFruits");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fridge Inventory</Text>
      <TextInput
        style={styles.searchBox}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search"
      />
      <FlatList
        data={fruitsData}
        renderItem={renderFruitItem}
        keyExtractor={(item, index) => index.toString()} // Use index as key
      />

      <TouchableOpacity style={styles.addButton} onPress={addFruit}>
        <Text style={styles.addButtonText}>Add Items</Text>
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

export default TestAlarm;
