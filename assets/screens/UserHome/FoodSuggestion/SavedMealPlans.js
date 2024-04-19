import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const mealPlans = [
  {
    id: "1",
    title: "Korean Chicken",
    kcal: "250 Kcal",
    liked: true,
    image: require("../../../images/koreanChicken.png"), // Replace with the path to your image
  },
  // Add more meal plans as needed
];

const SavedMealPlans = () => {
  const toggleLike = (id) => {
    // Implement the logic to toggle the like status
    console.log("Toggle like status for meal plan with id:", id);
  };

  const renderMealPlan = ({ item }) => (
    <View style={styles.mealPlanContainer}>
      <Image source={item.image} style={styles.mealImage} />
      <View style={styles.mealInfo}>
        <Text style={styles.mealCalories}>{item.kcal}</Text>
        <Text style={styles.mealTitle}>{item.title}</Text>
      </View>
      <TouchableOpacity
        onPress={() => toggleLike(item.id)}
        style={styles.likeButton}
      >
        <Text style={styles.likeButtonText}>{item.liked ? "❤️" : "🤍"}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Saved Meal Plans</Text>
      <FlatList
        data={mealPlans}
        renderItem={renderMealPlan}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  mealPlanContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  mealImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  mealInfo: {
    flex: 1,
    marginLeft: 10,
  },
  mealCalories: {
    fontSize: 14,
  },
  mealTitle: {
    fontWeight: "bold",
  },
  likeButton: {
    padding: 8,
  },
  likeButtonText: {
    fontSize: 24,
  },
});

export default SavedMealPlans;
