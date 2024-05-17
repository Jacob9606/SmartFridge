import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getEmail } from "../../../clientStorage";
import { BASE_URL } from "../../../../../config";

const { width, height } = Dimensions.get("window");

const FruitsInventory = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [fruitsData, setFruitsData] = useState([]);

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
      setFruitsData(data);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  const renderFruitItem = ({ item }) => (
    <View style={styles.fruitItem}>
      {item.name === "apple" && (
        <Image
          source={require("../../../../images/apple.png")}
          style={styles.fruitImage}
        />
      )}
      {item.name === "lemon" && (
        <Image
          source={require("../../../../images/lemon.png")}
          style={styles.fruitImage}
        />
      )}
      {item.name === "strawberry" && (
        <Image
          source={require("../../../../images/strawberry.png")}
          style={styles.fruitImage}
        />
      )}
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
      ></TouchableOpacity>
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
    <SafeAreaView style={styles.safeContainer}>
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
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContent}
        />
        <TouchableOpacity style={styles.addButton} onPress={addFruit}>
          <Text style={styles.addButtonText}>Add Items</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: width * 0.05,
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
    marginBottom: 10,
    width: "100%",
  },
  flatListContent: {
    paddingBottom: 80, // 추가된 여백
  },
  fruitItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    width: "100%",
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
    marginTop: 10,
    marginBottom: 20,
    width: "100%",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default FruitsInventory;
