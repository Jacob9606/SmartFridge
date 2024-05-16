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

const AddFruits = () => {
  const navigation = useNavigation();

  const [fruitData, setFruitData] = useState({
    name: "",
    quantity: "",
    expiryDate: "",
    calories: "",
  });
  const [selectedIcon, setSelectedIcon] = useState(null);

  const icons = [
    {
      name: "apple",
      source: require("../../../../../assets/images/apple.png"),
    },
    {
      name: "pear",
      source: require("../../../../../assets/images/pear.png"),
    },
    {
      name: "avocado",
      source: require("../../../../../assets/images/avocado.png"),
    },
    {
      name: "orange",
      source: require("../../../../../assets/images/orange.png"),
    },
    {
      name: "peach",
      source: require("../../../../../assets/images/peach.png"),
    },
    {
      name: "banana",
      source: require("../../../../../assets/images/banana.png"),
    },
    {
      name: "lemon",
      source: require("../../../../../assets/images/lemon.png"),
    },
    {
      name: "coconut",
      source: require("../../../../../assets/images/coconut.png"),
    },
    {
      name: "others",
      source: require("../../../../../assets/images/others.png"),
    },
    // ... other icons
  ];

  const handleIconSelect = (iconName) => {
    setSelectedIcon(iconName);
  };

  const handleSubmit = () => {
    // Check if all fields are filled
    // if (
    //   !fruitData.name ||
    //   !fruitData.quantity ||
    //   !fruitData.expiryDate ||
    //   !fruitData.calories ||
    //   !selectedIcon
    // ) {
    //   alert("Please fill in all fields.");
    //   return;
    // }

    // Handle the submission of the fruit data
    console.log("Fruit Data:", fruitData, "Selected Icon:", selectedIcon);
    navigation.navigate("SetUpFruits", { fruitData, selectedIcon }); // Navigation Params를 사용하여 데이터 전달
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add Items</Text>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={fruitData.name}
        onChangeText={(text) => setFruitData({ ...fruitData, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={fruitData.quantity}
        onChangeText={(text) => setFruitData({ ...fruitData, quantity: text })}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Expired date"
        value={fruitData.expiryDate}
        onChangeText={(text) =>
          setFruitData({ ...fruitData, expiryDate: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Calories"
        value={fruitData.calories}
        onChangeText={(text) => setFruitData({ ...fruitData, calories: text })}
        keyboardType="numeric"
      />
      <Text style={styles.chooseIconText}>Choose Icon</Text>
      <View style={styles.iconsContainer}>
        {icons.map((icon, index) => (
          <TouchableOpacity
            key={index}
            style={styles.iconWrapper}
            onPress={() => handleIconSelect(icon.name)}
          >
            <Image
              source={icon.source}
              style={[
                styles.iconImage,
                selectedIcon === icon.name && styles.selectedIcon,
              ]}
            />
            <Text style={styles.iconText}>{icon.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <View style={{ height: 60 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  chooseIconText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // 아이콘을 3개씩 나열하고 간격을 동일하게 배치
    paddingHorizontal: 10, // 양쪽 여백 추가
    marginBottom: 20,
  },
  iconWrapper: {
    alignItems: "center",
    marginBottom: 20, // 마진 삭제하고 여백 추가
    width: "30%", // 아이콘 컨테이너의 너비 조정하여 3개씩 배치
  },
  iconImage: {
    width: 60,
    height: 60,
  },
  picture: {
    borderWidth: 2,
    borderColor: "blue", // 선택된 아이콘의 테두리 색상
    borderRadius: 30,
  },
  iconText: {
    marginTop: 5,
    fontSize: 14,
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

export default AddFruits;
