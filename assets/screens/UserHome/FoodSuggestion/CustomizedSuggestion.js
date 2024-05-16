import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const suggestions = [
  {
    id: "1",
    title: "Korean Chicken",
    kcal: "250 Kcal",
    liked: true,
    image: require("../../../images/koreanChicken.png"), // Replace with your image path
  },
  {
    id: "2",
    title: "Salad",
    kcal: "230 Kcal",
    liked: false,
    image: require("../../../images/salad.png"), // Replace with your image path
  },
  {
    id: "3",
    title: "Sushi",
    kcal: "300 Kcal",
    liked: false,
    image: require("../../../images/sushi.png"), // Replace with your image path
  },
  {
    id: "4",
    title: "Dumplings",
    kcal: "250 Kcal",
    liked: true,
    image: require("../../../images/dumplings.png"), // Replace with your image path
  },
  // ... more suggestions
];

const CustomizedSuggestion = () => {
  const toggleLike = (id) => {
    // Here you would handle the logic to toggle the 'liked' state of each suggestion
    console.log("Toggled like for suggestion:", id);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemKcal}>{item.kcal}</Text>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <TouchableOpacity
        onPress={() => toggleLike(item.id)}
        style={styles.heartButton}
      >
        <Text style={styles.heartIcon}>{item.liked ? "❤️" : "🤍"}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Customized Suggestion</Text>
      <FlatList
        data={suggestions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.menuBar}>
        <TouchableOpacity onPress={() => console.log("Search button pressed")}>
          <Image
            source={require("../../../images/search.png")}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Smart Fridge Home button pressed")}
        >
          <Image
            source={require("../../../images/SmartFridgeHomeButton.png")}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Heart button pressed")}>
          <Image
            source={require("../../../images/heart.png")}
            style={styles.menuIcon}
          />
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
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  itemKcal: {
    fontSize: 14,
  },
  itemTitle: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 18,
    marginHorizontal: 10,
  },
  heartButton: {
    padding: 8,
  },
  heartIcon: {
    fontSize: 24,
  },
  menuBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
});

export default CustomizedSuggestion;
