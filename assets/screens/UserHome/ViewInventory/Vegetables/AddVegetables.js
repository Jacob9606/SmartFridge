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

const AddVegetables = () => {
  const [vegetableData, setVegetableData] = useState({
    productName: "Mushroom",
    quantity: "2",
    expiryDate: "05/04/2024",
    calories: "240",
  });
  const [selectedIcon, setSelectedIcon] = useState("Mushroom");

  // 예시 아이콘들, 실제 앱에서 사용하시는 이미지 경로로 교체해주세요.
  const icons = {
    Cabbage: require("./assets/cabbage.png"),
    Carrot: require("./assets/carrot.png"),
    Tomato: require("./assets/tomato.png"),
    Onion: require("./assets/onion.png"),
    BokChoy: require("./assets/bok_choy.png"),
    RedChili: require("./assets/red_chili.png"),
    Mushroom: require("./assets/mushroom.png"),
    Garlic: require("./assets/garlic.png"),
    Others: require("./assets/others.png"),
  };

  const handleIconSelect = (iconName) => {
    setSelectedIcon(iconName);
  };

  const handleAddVegetables = () => {
    // 채소 추가 로직 처리
    console.log(
      "Added Vegetables:",
      vegetableData,
      "Selected Icon:",
      selectedIcon
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add Vegetables</Text>

      <TextInput
        style={styles.input}
        onChangeText={(text) =>
          setVegetableData({ ...vegetableData, productName: text })
        }
        value={vegetableData.productName}
        placeholder="Product Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) =>
          setVegetableData({ ...vegetableData, quantity: text })
        }
        value={vegetableData.quantity.toString()}
        placeholder="Quantity"
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) =>
          setVegetableData({ ...vegetableData, expiryDate: text })
        }
        value={vegetableData.expiryDate}
        placeholder="Expired date"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) =>
          setVegetableData({ ...vegetableData, calories: text })
        }
        value={vegetableData.calories.toString()}
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

      <TouchableOpacity style={styles.button} onPress={handleAddVegetables}>
        <Text style={styles.buttonText}>Add Vegetables</Text>
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

export default AddVegetables;
