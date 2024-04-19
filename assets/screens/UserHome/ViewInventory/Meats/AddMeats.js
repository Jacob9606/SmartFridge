import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const AddMeats = () => {
  const [meatData, setMeatData] = useState({
    productName: "Beef",
    quantity: "1",
    expiryDate: "05/04/2024",
    calories: "250",
  });
  const [selectedIcon, setSelectedIcon] = useState("Beef");

  const icons = {
    Chicken: require("C:/Users/hp/SmartFridge/assets/images/chicken.png"), // 경로 수정
    Beef: require("C:/Users/hp/SmartFridge/assets/images/beef.png"),
    Pork: require("C:/Users/hp/SmartFridge/assets/images/pork.png"),
    Lamb: require("C:/Users/hp/SmartFridge/assets/images/lamb.png"),
    Kangaroo: require("C:/Users/hp/SmartFridge/assets/images/kangaroo.png"),
    Horse: require("C:/Users/hp/SmartFridge/assets/images/horse.png"),
    Rabbit: require("C:/Users/hp/SmartFridge/assets/images/rabbit.png"),
    Duck: require("C:/Users/hp/SmartFridge/assets/images/duck.png"),
    Others: require("C:/Users/hp/SmartFridge/assets/images/others.png"),
  };

  const handleIconSelect = (iconName) => {
    setSelectedIcon(iconName);
  };

  const handleAddMeats = () => {
    // 고기 추가 로직 처리
    console.log("Added Meats:", meatData, "Selected Icon:", selectedIcon);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add Meats</Text>

      {/* 나머지 코드는 동일 */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // 스타일링 코드는 동일
});

export default AddMeats;
