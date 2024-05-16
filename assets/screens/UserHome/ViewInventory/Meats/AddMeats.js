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
import { useNavigation } from "@react-navigation/native";

const AddMeats = () => {
  const navigation = useNavigation();

  // 초기 Meat 데이터 및 선택된 아이콘을 관리하는 상태
  const [meatData, setMeatData] = useState({
    productName: "Chicken",
    quantity: "2",
    expiryDate: "05/04/2024",
    calories: "240",
  });
  const [selectedIcon, setSelectedIcon] = useState("Chicken");

  // 아이콘 이미지 및 이름 정의
  const icons = {
    Chicken: require("../../../../images/chicken.png"),
    Beef: require("../../../../images/beef.png"),
    Pork: require("../../../../images/pork.png"),
    Lamb: require("../../../../images/lamb.png"),
    Kangaroo: require("../../../../images/kangaroo.png"),
    Horse: require("../../../../images/horse.png"),
    Rabbit: require("../../../../images/rabbit.png"),
    Duck: require("../../../../images/duck.png"),
    Others: require("../../../../images/others.png"),
  };

  // 선택된 아이콘을 업데이트하는 함수
  const handleIconSelect = (iconName) => {
    setSelectedIcon(iconName);
  };

  // 쇼핑 항목 추가 버튼을 눌렀을 때 호출되는 함수
  const handleAddMeats = () => {
    console.log("Added Meats:", meatData, "Selected Icon:", selectedIcon);
    navigation.navigate("SetUpMeats"); // SetUpMeats 컴포넌트로 이동
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add Meats</Text>

      {/* 상품명 입력란 */}
      <TextInput
        style={styles.input}
        onChangeText={(text) => setMeatData({ ...meatData, productName: text })}
        value={meatData.productName}
        placeholder="Product Name"
      />
      {/* 수량 입력란 */}
      <TextInput
        style={styles.input}
        onChangeText={(text) => setMeatData({ ...meatData, quantity: text })}
        value={meatData.quantity.toString()}
        placeholder="Quantity"
        keyboardType="number-pad"
      />
      {/* 유통 기한 입력란 */}
      <TextInput
        style={styles.input}
        onChangeText={(text) => setMeatData({ ...meatData, expiryDate: text })}
        value={meatData.expiryDate}
        placeholder="Expired date"
      />
      {/* 칼로리 입력란 */}
      <TextInput
        style={styles.input}
        onChangeText={(text) => setMeatData({ ...meatData, calories: text })}
        value={meatData.calories.toString()}
        placeholder="Calories"
        keyboardType="number-pad"
      />

      {/* 아이콘 선택 섹션 */}
      <Text style={styles.label}>Choose Icon</Text>
      <View style={styles.iconsContainer}>
        {/* 아이콘 목록 렌더링 */}
        {Object.keys(icons).map((iconName) => (
          <TouchableOpacity
            key={iconName}
            onPress={() => handleIconSelect(iconName)}
            style={[
              styles.icon,
              selectedIcon === iconName && styles.selectedIcon,
            ]}
          >
            <Image source={icons[iconName]} style={styles.iconImage} />
            <Text style={styles.iconText}>{iconName}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 쇼핑 항목 추가 버튼 */}
      <TouchableOpacity style={styles.button} onPress={handleAddMeats}>
        <Text style={styles.buttonText}>Add Meats</Text>
      </TouchableOpacity>
      {/* 하단 여백 */}
      <View style={{ height: 60 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  icon: {
    alignItems: "center",
    marginBottom: 10,
    width: 100,
  },
  iconImage: {
    width: 60,
    height: 60,
  },
  iconText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
  },
  selectedIcon: {
    borderWidth: 2,
    borderColor: "#ff0000",
    borderRadius: 30,
  },
  button: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: -10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default AddMeats;
