import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { getEmail } from "../clientStorage";
import { BASE_URL } from "../../../config";

const AddProfile = () => {
  const [name, setName] = useState("");
  const [dob, setDateOfBirth] = useState(new Date()); // 생년월일 상태 추가
  // const [foodPreference, setFoodPreference] = useState(""); // 식품 선호도 상태 추가
  const [showDatePicker, setShowDatePicker] = useState(false); // DatePicker 표시 여부 상태 추가
  const navigation = useNavigation();

  // DatePicker 표시 토글 함수
  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  // DatePicker 변경 핸들러
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(Platform.OS === "ios");
    setDateOfBirth(currentDate);
  };

  // 날짜를 "YYYY-MM-DD" 형식의 문자열로 변환하는 함수
  const formatDate = (date) => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };

  // 프로필 생성 함수
  const createProfile = async () => {
    try {
      // Await getEmail() to retrieve the email before continuing
      const userEmail = await getEmail();

      const profileData = {
        name: name,
        dob: formatDate(dob), // 생년월일을 문자열로 변환
        userEmail: userEmail, // 이메일 추가
      };

      // 프로필 생성 API 호출
      const response = await fetch(BASE_URL + "/profiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) {
        console.log(getEmail());
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Profile created successfully:", data);
      navigation.navigate("ProfileMain");
    } catch (error) {
      console.error("Error creating profile:", error);
      alert("Failed to create profile. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Profile</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Enter Name"
      />
      <Text style={styles.label}>Date of Birth</Text>
      <TouchableOpacity style={styles.input} onPress={showDatepicker}>
        <Text>{formatDate(dob)}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dob}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <TouchableOpacity style={styles.button} onPress={createProfile}>
        <Text style={styles.buttonText}>Create a Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default AddProfile;
