import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const SetAlarm = () => {
  const [alarmTime, setAlarmTime] = useState(new Date());
  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedTime) => {
    const currentTime = selectedTime || alarmTime;
    setShow(Platform.OS === "ios");
    setAlarmTime(currentTime);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const saveAlarm = () => {
    // Logic to save the alarm will go here
    console.log("Alarm set for:", alarmTime);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Set Alarm</Text>
      <Image
        source={require("../../images/Jacob.png")} // Replace with your local image path
        style={styles.profileImage}
      />
      <Text style={styles.nameText}>Myunggyun Yu</Text>
      <Text style={styles.ageText}>26</Text>
      <Text style={styles.description}>
        We will give you notification for the low quantity and expired date
      </Text>
      <TouchableOpacity
        onPress={() => showMode("time")}
        style={styles.timeInput}
      >
        <Text style={styles.timeText}>
          {alarmTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton} onPress={saveAlarm}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={alarmTime}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  ageText: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  timeInput: {
    width: "80%",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "grey",
    marginBottom: 20,
  },
  timeText: {
    textAlign: "center",
    fontSize: 18,
  },
  saveButton: {
    backgroundColor: "pink",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: "80%",
  },
  saveButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SetAlarm;
