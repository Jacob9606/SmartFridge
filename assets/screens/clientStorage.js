import AsyncStorage from "@react-native-async-storage/async-storage";

// 이메일 저장
export const storeEmail = async (email) => {
  try {
    await AsyncStorage.setItem("userEmail", email);
    console.log("Email stored successfully");
  } catch (error) {
    console.error("Error storing email:", error);
  }
};

// Function to retrieve the saved email
export const getEmail = async () => {
  try {
    const email = await AsyncStorage.getItem("userEmail");
    console.log(email);
    return email || null;
  } catch (error) {
    console.error("Error retrieving email:", error);
    return null;
  }
};

// 이메일 삭제
export const deleteEmail = async () => {
  try {
    await AsyncStorage.removeItem("userEmail");
    console.log("Email removed successfully");
  } catch (error) {
    console.error("Error removing email:", error);
  }
};

// Function to store the profileId
export const storeProfileId = async (profileId) => {
  try {
    await AsyncStorage.setItem("profileId", profileId);
    console.log("Profile ID stored successfully");
  } catch (error) {
    console.error("Error storing profile ID:", error);
  }
};

// Function to retrieve the saved profileId
export const getProfileId = async () => {
  try {
    const profileId = await AsyncStorage.getItem("profileId");

    return profileId || null;
  } catch (error) {
    console.error("Error retrieving profile ID:", error);
    return null;
  }
};
