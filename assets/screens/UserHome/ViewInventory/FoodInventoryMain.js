import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";

const categories = [
  {
    id: "1",
    title: "Fruits",
    image: require("C:/Users/hp/SmartFridge/assets/images/fruit.png"),
  },
  {
    id: "2",
    title: "Vegetables",
    image: require("C:/Users/hp/SmartFridge/assets/images/vegetable.png"),
  },
  {
    id: "3",
    title: "Meat",
    image: require("C:/Users/hp/SmartFridge/assets/images/meat.png"),
  },
  {
    id: "4",
    title: "Drinks",
    image: require("C:/Users/hp/SmartFridge/assets/images/drinks.png"),
  },
  {
    id: "5",
    title: "Sauce",
    image: require("C:/Users/hp/SmartFridge/assets/images/sauces.png"),
  },
  {
    id: "6",
    title: "Others",
    image: require("C:/Users/hp/SmartFridge/assets/images/others.png"),
  },
];

const FoodInventoryMain = () => {
  // Replace with navigation or state management logic as necessary
  const navigateToCategory = (category) => {
    console.log("Navigate to category:", category);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigateToCategory(item.title)}
    >
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Food Inventory</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  columnWrapper: {
    justifyContent: "space-around",
  },
  categoryItem: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  categoryImage: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default FoodInventoryMain;
