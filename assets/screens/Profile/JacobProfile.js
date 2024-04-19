import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";

const JacobProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Myunggyun Yu");
  const [age, setAge] = useState("26");
  const [preferences, setPreferences] = useState("Asian");
  const [dietaryRestriction, setDietaryRestriction] = useState("Shellfish");
  const [allergies, setAllergies] = useState("None");

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Logic for setting alarms will go here
  const setAlarms = () => {
    console.log("Set Alarms");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={handleEditToggle}>
          <Image
            source={require("../../images/editIcon.png")} // Replace with your local image path
            style={styles.editIcon}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../../images/Jacob.png")} // Replace with your local image path
        style={styles.profileImage}
      />
      {!isEditing ? (
        <Text style={styles.nameText}>{`${name}, ${age}`}</Text>
      ) : (
        <View style={styles.editableTextContainer}>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.editableText}
          />
          <TextInput
            value={age}
            onChangeText={setAge}
            style={styles.editableText}
            keyboardType="number-pad"
          />
        </View>
      )}

      <Text style={styles.infoTitle}>Preferences</Text>
      {!isEditing ? (
        <Text style={styles.infoText}>{preferences}</Text>
      ) : (
        <TextInput
          value={preferences}
          onChangeText={setPreferences}
          style={styles.infoTextInput}
        />
      )}

      <Text style={styles.infoTitle}>Dietary restriction</Text>
      {!isEditing ? (
        <Text style={styles.infoText}>{dietaryRestriction}</Text>
      ) : (
        <TextInput
          value={dietaryRestriction}
          onChangeText={setDietaryRestriction}
          style={styles.infoTextInput}
        />
      )}

      <Text style={styles.infoTitle}>Allergies</Text>
      {!isEditing ? (
        <Text style={styles.infoText}>{allergies}</Text>
      ) : (
        <TextInput
          value={allergies}
          onChangeText={setAllergies}
          style={styles.infoTextInput}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={setAlarms}>
        <Text style={styles.buttonText}>Set Alarms</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 20,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 8,
  },
  editableTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  editableText: {
    borderBottomWidth: 1,
    marginHorizontal: 2,
    fontSize: 22,
    fontWeight: "bold",
  },
  infoTitle: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  infoText: {
    alignSelf: "flex-start",
    marginLeft: 20,
    fontSize: 18,
  },
  infoTextInput: {
    alignSelf: "flex-start",
    marginLeft: 20,
    borderBottomWidth: 1,
    fontSize: 18,
    width: "90%",
  },
  button: {
    backgroundColor: "pink",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "90%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default JacobProfile;
