import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const foodSuggestions = [
  {
    id: "1",
    name: "Korean Chicken",
    kcal: "250 Kcal",
    image: require("../../../images/koreanChicken.png"),
  },
  {
    id: "2",
    name: "Salad",
    kcal: "250 Kcal",
    image: require("../../../images/salad.png"),
  },
  {
    id: "3",
    name: "Sushi",
    kcal: "250 Kcal",
    image: require("../../../images/sushi.png"),
  },
  {
    id: "4",
    name: "Dumplings",
    kcal: "250 Kcal",
    image: require("../../../images/dumplings.png"),
  },
  // Add more suggestions as needed
];

const Suggestion = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemCalories}>{item.kcal}</Text>
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
      <TouchableOpacity style={styles.likeButton}>
        <Text>❤️</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton}>
        <Text>✕</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Food Suggestion</Text>
      <FlatList
        data={foodSuggestions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.customizeButton}>
        <Text style={styles.buttonText}>Customize Meal Plans</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>Add Recipe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 44,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemCalories: {
    fontSize: 16,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  likeButton: {
    marginRight: 10,
  },
  deleteButton: {
    marginRight: 10,
  },
  customizeButton: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: "90%",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Suggestion;
