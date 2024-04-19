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
    Chicken: require("../../../../../assets/images/chicken.png"),
    Beef: require("../../../../../assets/images/beef.png"),
    Pork: require("../../../../../assets/images/pork.png"),
    Lamb: require("../../../../../assets/images/lamb.png"),
    Kangaroo: require("../../../../../assets/images/kangaroo.png"),
    Horse: require("../../../../../assets/images/horse.png"),
    Rabbit: require("../../../../../assets/images/rabbit.png"),
    Duck: require("../../../../../assets/images/duck.png"),
    Others: require("../../../../../assets/images/others.png"),
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

      <TextInput
        style={styles.input}
        onChangeText={(text) => setMeatData({ ...meatData, productName: text })}
        value={meatData.productName}
        placeholder="Product Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setMeatData({ ...meatData, quantity: text })}
        value={meatData.quantity.toString()}
        placeholder="Quantity"
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setMeatData({ ...meatData, expiryDate: text })}
        value={meatData.expiryDate}
        placeholder="Expired date"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setMeatData({ ...meatData, calories: text })}
        value={meatData.calories.toString()}
        placeholder="Calories"
        keyboardType="number-pad"
      />

      <Text style={styles.label}>Choose Icon</Text>
      <View style={styles.iconsContainer}>
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

      <TouchableOpacity style={styles.button} onPress={handleAddMeats}>
        <Text style={styles.buttonText}>Add Meats</Text>
      </TouchableOpacity>
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
    padding: 10,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
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
    borderColor: "#ff0000", // 선택되었을 때 보여질 테두리 색상
    borderRadius: 30,
  },
  button: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default AddMeats;
