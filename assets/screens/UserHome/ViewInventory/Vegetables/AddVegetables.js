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

const AddVegetables = () => {
  const navigation = useNavigation();

  const [vegetableData, setVegetableData] = useState({
    productName: "Mushroom",
    quantity: "2",
    expiryDate: "05/04/2024",
    calories: "240",
  });
  const [selectedIcon, setSelectedIcon] = useState("Mushroom");

  const icons = {
    Cabbage: require("../../../../images/cabbage.png"),
    Carrot: require("../../../../images/carrot.png"),
    Tomato: require("../../../../images/tomato.png"),
    Onion: require("../../../../images/onion.png"),
    BokChoy: require("../../../../images/bokChoy.png"),
    RedChili: require("../../../../images/chili.png"),
    Mushroom: require("../../../../images/mushroom.png"),
    Garlic: require("../../../../images/garlic.png"),
    Others: require("../../../../images/others.png"),
  };

  const handleIconSelect = (iconName) => {
    setSelectedIcon(iconName);
  };

  const handleAddVegetables = () => {
    console.log(
      "Added Vegetables:",
      vegetableData,
      "Selected Icon:",
      selectedIcon
    );
    navigation.navigate("SetUpVegetables"); // SetUpFruits 컴포넌트로 이동
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

export default AddVegetables;
