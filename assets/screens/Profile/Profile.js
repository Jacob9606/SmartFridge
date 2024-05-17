import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";

const { width } = Dimensions.get("window");

const Profile = ({ navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [calorieTarget, setCalorieTarget] = useState("67");

  const toggleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => {}}
        ></TouchableOpacity>
        <Image
          source={require("../../../assets/images/smile.png")}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Kevin Sanjaya</Text>
        <TouchableOpacity style={styles.editButton} onPress={toggleEditProfile}>
          <Text style={styles.editButtonText}>
            {isEditing ? "Update" : "Edit Calorie Target"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scoresContainer}>
        <View style={styles.scoreBox}>
          <Text style={styles.score}>98</Text>
          <Text style={styles.scoreLabel}>Today Calories</Text>
        </View>
        <View style={styles.scoreBox}>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={calorieTarget}
              onChangeText={setCalorieTarget}
              keyboardType="numeric"
            />
          ) : (
            <Text style={styles.score}>{calorieTarget}</Text>
          )}
          <Text style={styles.scoreLabel}>Calorie Target</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Completion Rate</Text>
        <Text style={styles.chartSubtitle}>Daily</Text>
        <Image
          source={require("../../../assets/images/animal.png")}
          style={styles.chartImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "pink",
    alignItems: "center",
    paddingVertical: 20,
  },
  settingsButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  settingsIcon: {
    width: 35,
    height: 35,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "white",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  grade: {
    fontSize: 16,
    color: "#fff",
  },
  editButton: {
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  editButtonText: {
    color: "#3b82f6",
    fontSize: 16,
  },
  scoresContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  scoreBox: {
    width: width * 0.4,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 20,
  },
  score: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  scoreLabel: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  chartContainer: {
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    marginHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chartSubtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  chartImage: {
    width: width * 0.5,
    height: width * 0.5,
  },
  input: {
    width: "60%",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Profile;
