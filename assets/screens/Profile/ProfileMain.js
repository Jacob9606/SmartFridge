import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

const profiles = [
  { id: "1", name: "Profile1" },
  { id: "2", name: "Profile2" },
  { id: "3", name: "Profile3" },
  { id: "4", name: "Profile4" },
  // Add more profiles as needed
];

const ProfileMain = () => {
  const renderProfile = ({ item }) => (
    <View style={styles.profileContainer}>
      <Image
        style={styles.profileImage}
        source={{ uri: "https://via.placeholder.com/150" }} // Placeholder image source
      />
      <Text style={styles.profileName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity
          onPress={() => {
            /* handle add profile */
          }}
        >
          <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={profiles}
        renderItem={renderProfile}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 44, // Adjust this value based on your status bar + nav bar height
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  addIcon: {
    fontSize: 24,
    fontWeight: "bold",
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
    marginVertical: 8,
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#000", // Placeholder background
    marginBottom: 8,
  },
  profileName: {
    fontSize: 16,
  },
});

export default ProfileMain;
