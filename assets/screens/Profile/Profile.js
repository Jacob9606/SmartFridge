import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getProfileId } from "../clientStorage";
import { BASE_URL } from "../../../config";

const Profile = ({ navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [preferences, setPreferences] = useState("");
  const [dietaryRestriction, setDietaryRestriction] = useState("");
  const [allergies, setAllergies] = useState("");

  useEffect(() => {
    fetchProfileData();
    loadStoredData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const profileId = await getProfileId();
      console.log(BASE_URL + `/profiles/${profileId}`);
      const response = await fetch(BASE_URL + `/profiles/${profileId}`);
      if (!response.ok) {
        throw new Error("Fetching profile was not ok");
      }
      const data = await response.json();
      setName(data.name);
      setDob(data.dob);
      // Update other state variables as needed
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  const loadStoredData = async () => {
    try {
      const storedPreferences = await AsyncStorage.getItem("preferences");
      const storedDietaryRestriction = await AsyncStorage.getItem(
        "dietaryRestriction"
      );
      const storedAllergies = await AsyncStorage.getItem("allergies");
      if (storedPreferences !== null) setPreferences(storedPreferences);
      if (storedDietaryRestriction !== null)
        setDietaryRestriction(storedDietaryRestriction);
      if (storedAllergies !== null) setAllergies(storedAllergies);
    } catch (error) {
      console.error("Error loading stored data:", error);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    setIsEditing(false);
    try {
      await AsyncStorage.setItem("preferences", preferences);
      await AsyncStorage.setItem("dietaryRestriction", dietaryRestriction);
      await AsyncStorage.setItem("allergies", allergies);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const navigateToSetAlarm = () => {
    navigation.navigate("SetAlarm");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        {isEditing ? (
          <TouchableOpacity onPress={handleSave}>
            <Text style={styles.saveButton}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleEditToggle}>
            <Image
              source={require("../../images/editIcon.png")}
              style={styles.editIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      <Image
        source={require("../../images/smile.png")}
        style={styles.profileImage}
      />
      <Text style={styles.nameText}>{`${name}, ${dob}`}</Text>

      {isEditing ? (
        <>
          <Text style={styles.inputLabel}>Preferences</Text>
          <TextInput
            style={styles.inputBox}
            value={preferences}
            onChangeText={setPreferences}
            placeholder="Enter Preferences here"
          />
          <Text style={styles.inputLabel}>Dietary Restriction</Text>
          <TextInput
            style={styles.inputBox}
            value={dietaryRestriction}
            onChangeText={setDietaryRestriction}
            placeholder="Enter Dietary restriction here"
          />
          <Text style={styles.inputLabel}>Allergies</Text>
          <TextInput
            style={styles.inputBox}
            value={allergies}
            onChangeText={setAllergies}
            placeholder="Enter Allergies here"
          />
        </>
      ) : (
        <>
          <Text style={styles.displayText}>Preferences: {preferences}</Text>
          <Text style={styles.displayText}>
            Dietary Restriction: {dietaryRestriction}
          </Text>
          <Text style={styles.displayText}>Allergies: {allergies}</Text>
        </>
      )}
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
  saveButton: {
    color: "blue",
    fontWeight: "bold",
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
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputBox: {
    width: "90%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  displayText: {
    fontSize: 16,
    marginVertical: 5,
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

export default Profile;
