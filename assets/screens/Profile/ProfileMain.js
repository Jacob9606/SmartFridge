import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { getEmail, storeProfileId } from "../clientStorage";
import { BASE_URL } from "../../../config";

const ProfileMain = () => {
  const navigation = useNavigation();
  const [profiles, setProfiles] = useState([]);

  // 프로필 데이터를 가져오는 함수
  const fetchProfiles = async () => {
    try {
      const email = await getEmail();
      const response = await fetch(BASE_URL + `/profiles/owner/${email}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProfiles(data);
    } catch (error) {
      console.error("프로필을 가져오는 중 오류 발생:", error);
    }
  };

  // 프로필 삭제 함수
  const deleteProfile = async (profileId) => {
    try {
      const response = await fetch(BASE_URL + `/profiles/delete/${profileId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // 프로필 삭제 후 다시 데이터 가져오기
      fetchProfiles();
    } catch (error) {
      console.error("프로필 삭제 중 오류 발생:", error);
    }
  };

  // 삭제 확인 대화상자 표시 함수
  const confirmDeleteProfile = (profileId) => {
    Alert.alert(
      "프로필 삭제",
      "이 프로필을 삭제하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "삭제",
          onPress: () => deleteProfile(profileId),
        },
      ],
      { cancelable: false }
    );
  };

  // 화면이 포커스를 받을 때 프로필 데이터를 가져옴
  useFocusEffect(
    React.useCallback(() => {
      fetchProfiles();
    }, [])
  );

  // AddProfile 화면으로 이동하는 함수
  const handleAddProfilePress = () => {
    if (profiles.length < 4) {
      navigation.navigate("AddProfile");
    } else {
      alert("프로필은 최대 4개까지 생성할 수 있습니다.");
    }
  };

  const testAlarm = () => {
    navigation.navigate("TestAlarm");
  };

  // Profile1Home 화면으로 이동하고 profileId를 저장하는 함수
  const handleProfilePress = async (profileId) => {
    await storeProfileId(profileId);
    navigation.navigate("Profile1Home");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        {profiles.length < 4 && (
          <TouchableOpacity onPress={handleAddProfilePress}>
            <Text style={styles.addIcon}>+</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.profileContainer}>
        {profiles?.map((profile, index) => (
          <View key={index} style={styles.profileItemContainer}>
            <TouchableOpacity
              onPress={() => handleProfilePress(profile.profileId)}
            >
              <View style={styles.profileItem}>
                <Image
                  source={require("../../../assets/images/smile.png")}
                  style={styles.profileImage}
                />
                <Text style={styles.profileName}>{profile.name}</Text>
                <Text style={styles.profileId}>{profile.profileId}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => confirmDeleteProfile(profile.profileId)}
            >
              <Text style={styles.deleteButtonText}>삭제</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.deleteButtonText}
              onPress={testAlarm}
            >
              <Text style={styles}>Set Alarms</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  addIcon: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 20,
  },
  profileItemContainer: {
    alignItems: "center",
    margin: 10,
  },
  profileItem: {
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    marginTop: 8,
  },
  profileId: {
    marginTop: 4,
    color: "#888",
  },
  deleteButton: {
    marginTop: 5,
    backgroundColor: "#ff4d4d",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProfileMain;
