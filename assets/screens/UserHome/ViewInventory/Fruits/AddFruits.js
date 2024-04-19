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

const AddFruits = () => {
  const [fruitData, setFruitData] = useState({
    productName: "Pear",
    quantity: "3",
    expiryDate: "07/04/2024",
    calories: "351",
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
    // Handle the submission of the fruit data
    console.log("Fruit Data:", fruitData, "Selected Icon:", selectedIcon);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add Fruits</Text>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={fruitData.productName}
        onChangeText={(text) =>
          setFruitData({ ...fruitData, productName: text })
        }
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
    justifyContent: "space-around",
    marginBottom: 20,
  },
  iconWrapper: {
    alignItems: "center",
    marginBottom: 10,
  },
  iconImage: {
    width: 60,
    height: 60,
  },
  selectedIcon: {
    borderWidth: 2,
    borderColor: "blue", // Adjust color as needed
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
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default AddFruits;
