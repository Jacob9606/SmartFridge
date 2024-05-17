import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// Import images
import searchImage from "../../../images/search.png";
import SmartFridgeHomeButtonImage from "../../../images/SmartFridgeHomeButton.png";
import heartImage from "../../../images/heart.png";

const { width, height } = Dimensions.get("window");

const initialFoodSuggestions = [
  {
    id: "1",
    name: "Korean Chicken",
    kcal: "250 Kcal",
    image: require("../../../images/koreanChicken.png"),
    liked: false,
  },
  {
    id: "2",
    name: "Salad",
    kcal: "250 Kcal",
    image: require("../../../images/salad.png"),
    liked: false,
  },
  {
    id: "3",
    name: "Sushi",
    kcal: "250 Kcal",
    image: require("../../../images/sushi.png"),
    liked: false,
  },
  {
    id: "4",
    name: "Dumplings",
    kcal: "250 Kcal",
    image: require("../../../images/dumplings.png"),
    liked: false,
  },
  // ... 여기에 더 많은 음식 아이템을 추가할 수 있습니다.
];

const Suggestion = () => {
  const [foodSuggestions, setFoodSuggestions] = useState(
    initialFoodSuggestions
  );
  const navigation = useNavigation();

  const toggleLike = (id) => {
    setFoodSuggestions((current) =>
      current.map((food) =>
        food.id === id ? { ...food, liked: !food.liked } : food
      )
    );
  };

  const removeSuggestion = (id) => {
    setFoodSuggestions((current) => current.filter((food) => food.id !== id));
  };

  const handlePressRecipe = (name) => {
    // 예시: KoreanChickenRecipe 화면으로 이동
    navigation.navigate("Recipe");
  };

  const handlePressCustomize = () => {
    navigation.navigate("Preference");
  };

  const handlePressAddRecipe = () => {
    navigation.navigate("AddRecipe");
  };

  const renderFoodItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePressRecipe(item.name)}>
      <View style={styles.foodItem}>
        <View style={styles.foodInfo}>
          <Image style={styles.foodImage} source={item.image} />
          <View>
            <Text style={styles.foodName}>{item.name}</Text>
            <Text>{item.kcal}</Text>
          </View>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => toggleLike(item.id)}>
            <AntDesign
              name={item.liked ? "heart" : "hearto"}
              size={24}
              color="red"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeSuggestion(item.id)}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={foodSuggestions}
        renderItem={renderFoodItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
      <TouchableOpacity style={styles.button} onPress={handlePressCustomize}>
        <Text style={styles.buttonText}>Customize Meal Plans</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePressAddRecipe}>
        <Text style={styles.buttonText}>Add Recipe</Text>
      </TouchableOpacity>
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <Image source={searchImage} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={SmartFridgeHomeButtonImage} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={heartImage} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  flatListContent: {
    paddingBottom: 100,
    paddingHorizontal: width * 0.05,
  },
  foodItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  foodInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  foodImage: {
    width: width * 0.15,
    height: width * 0.15,
    marginRight: 10,
    borderRadius: (width * 0.15) / 2,
  },
  foodName: {
    fontWeight: "bold",
    fontSize: width * 0.04,
  },
  actions: {
    flexDirection: "row",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  icon: {
    width: width * 0.06,
    height: width * 0.06,
  },
  button: {
    backgroundColor: "pink",
    padding: 15,
    marginHorizontal: width * 0.05,
    marginBottom: 10,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: width * 0.04,
  },
});

export default Suggestion;
