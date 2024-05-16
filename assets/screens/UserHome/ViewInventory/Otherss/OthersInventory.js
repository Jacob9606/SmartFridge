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

const othersData = [
  {
    id: "1",
    name: "Kimchi",
    kcal: "250 Kcal",
    quantity: 3,
    expiryDate: "01/04",
  },
  {
    id: "2",
    name: "Seafood",
    kcal: "250 Kcal",
    quantity: 2,
    expiryDate: "01/04",
  },
  {
    id: "3",
    name: "Bibimbap",
    kcal: "250 Kcal",
    quantity: 3,
    expiryDate: "01/04",
  },
  // Add more others here
];

const OthersInventory = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const renderOtherItem = ({ item }) => (
    <View style={styles.otherItem}>
      {item.name === "Kimchi" && (
        <Image
          source={require("../../../../images/others.png")}
          style={styles.otherImage}
        />
      )}
      {item.name === "Seafood" && (
        <Image
          source={require("../../../../images/others.png")}
          style={styles.otherImage}
        />
      )}
      {item.name === "Bibimbap" && (
        <Image
          source={require("../../../../images/others.png")}
          style={styles.otherImage}
        />
      )}
      <View style={styles.otherDetails}>
        <Text style={styles.otherName}>{item.name}</Text>
        <Text style={styles.otherInfo}>{item.kcal}</Text>
        <Text style={styles.otherInfo}>Expired date: {item.expiryDate}</Text>
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

  const addOther = () => {
    navigation.navigate("AddOthers");
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
        data={othersData}
        renderItem={renderOtherItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.addButton} onPress={addOther}>
        <Text style={styles.addButtonText}>Add Other</Text>
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
  otherItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  otherImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  otherDetails: {
    marginLeft: 10,
    flex: 1,
  },
  otherName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  otherInfo: {
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

export default OthersInventory;
