import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./assets/screens/Login/Login";
import CreateAccount from "./assets/screens/Login/CreateAcccount";
import ForgotPassword from "./assets/screens/Login/ForgotPassword";
import ResetPassword from "./assets/screens/Login/ResetPassword";

import AddProfile from "./assets/screens/Profile/AddProfile";
import Profile from "./assets/screens/Profile/Profile";
import Profile1Home from "./assets/screens/Profile/Profile1Home";
import ProfileMain from "./assets/screens/Profile/ProfileMain";
import SetAlarm from "./assets/screens/Profile/SetAlarm";

import ShoppingList from "./assets/screens/UserHome/CheckShoppingList/ShoppingList";

import AddRecipe from "./assets/screens/UserHome/FoodSuggestion/AddRecipe";
import CustomizedSuggestion from "./assets/screens/UserHome/FoodSuggestion/CustomizedSuggestion";
import DietaryRestriction from "./assets/screens/UserHome/FoodSuggestion/DietaryRestriction";
import Recipe from "./assets/screens/UserHome/FoodSuggestion/Recipe";
import Preference from "./assets/screens/UserHome/FoodSuggestion/Preference";
import SavedMealPlans from "./assets/screens/UserHome/FoodSuggestion/SavedMealPlans";
import Suggestion from "./assets/screens/UserHome/FoodSuggestion/Suggestion";

import GenerateAReport from "./assets/screens/UserHome/GenerateReport/GenerateAReport";

import CheckYourDailyGoal from "./assets/screens/UserHome/TrackYourHealth/CheckYourDailyGoal";
import DailyTarget from "./assets/screens/UserHome/TrackYourHealth/DailyTarget";
import SetTarget from "./assets/screens/UserHome/TrackYourHealth/SetTarget";
import TrackYourHealthMain from "./assets/screens/UserHome/TrackYourHealth/TrackYourHealthMain";

import AddDrinks from "./assets/screens/UserHome/ViewInventory/Drinks/AddDrinks";
import DrinksInventory from "./assets/screens/UserHome/ViewInventory/Drinks/DrinksInventory";
import SetUpDrinks from "./assets/screens/UserHome/ViewInventory/Drinks/SetUpDrinks";

import AddFruits from "./assets/screens/UserHome/ViewInventory/Fruits/AddFruits";
import FruitsInventory from "./assets/screens/UserHome/ViewInventory/Fruits/FruitsInventory";
import SetUpFruits from "./assets/screens/UserHome/ViewInventory/Fruits/SetUpFruits";

import AddMeats from "./assets/screens/UserHome/ViewInventory/Meats/AddMeats";
import MeatsInventory from "./assets/screens/UserHome/ViewInventory/Meats/MeatsInventory";
import SetUpMeats from "./assets/screens/UserHome/ViewInventory/Meats/SetUpMeats";

import AddOthers from "./assets/screens/UserHome/ViewInventory/Otherss/AddOthers";
import OthersInventory from "./assets/screens/UserHome/ViewInventory/Otherss/OthersInventory";
import SetUpOthers from "./assets/screens/UserHome/ViewInventory/Otherss/SetUpOthers";

import AddSauce from "./assets/screens/UserHome/ViewInventory/Sauce/AddSauce";
import SauceInventory from "./assets/screens/UserHome/ViewInventory/Sauce/SauceInventory";
import SetUpSauce from "./assets/screens/UserHome/ViewInventory/Sauce/SetUpSauce";

import AddVegetables from "./assets/screens/UserHome/ViewInventory/Vegetables/AddVegetables";
import SetUpVegetables from "./assets/screens/UserHome/ViewInventory/Vegetables/SetUpVegetables";
import VegetablesInventory from "./assets/screens/UserHome/ViewInventory/Vegetables/VegetablesInventory";
import TestAlarm from "./assets/screens/Profile/TestAlarm";
import Dashboard from "./assets/screens/Dashboard/DashBoard";
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="TestAlarm"
          component={TestAlarm}
          options={{ title: "TestAlarm" }}
        />
        <Stack.Screen
          name="ProfileMain"
          component={ProfileMain}
          options={{ title: "ProfileMain" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ title: "CreateAccount" }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ title: "ForgotPassword" }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ title: "ResetPassword" }}
        />
        <Stack.Screen
          name="AddProfile"
          component={AddProfile}
          options={{ title: "AddProfile" }}
        />
        <Stack.Screen
          name="Profile1Home"
          component={Profile1Home}
          options={{ title: "Profile1Home" }}
        />
        <Stack.Screen
          name="SetAlarm"
          component={SetAlarm}
          options={{ title: "SetAlarm" }}
        />
        <Stack.Screen
          name="ShoppingList"
          component={ShoppingList}
          options={{ title: "ShoppingList" }}
        />
        <Stack.Screen
          name="AddRecipe"
          component={AddRecipe}
          options={{ title: "AddRecipe" }}
        />
        <Stack.Screen
          name="CustomizedSuggestion"
          component={CustomizedSuggestion}
          options={{ title: "CustomizedSuggestion" }}
        />
        <Stack.Screen
          name="DietaryRestriction"
          component={DietaryRestriction}
          options={{ title: "DietaryRestriction" }}
        />
        <Stack.Screen
          name="Recipe"
          component={Recipe}
          options={{ title: "Recipe" }}
        />
        <Stack.Screen
          name="Preference"
          component={Preference}
          options={{ title: "Preference" }}
        />
        <Stack.Screen
          name="SavedMealPlans"
          component={SavedMealPlans}
          options={{ title: "SavedMealPlans" }}
        />
        <Stack.Screen
          name="Suggestion"
          component={Suggestion}
          options={{ title: "Suggestion" }}
        />
        <Stack.Screen
          name="GenerateAReport"
          component={GenerateAReport}
          options={{ title: "GenerateAReport" }}
        />
        <Stack.Screen
          name="CheckYourDailyGoal"
          component={CheckYourDailyGoal}
          options={{ title: "CheckYourDailyGoal" }}
        />
        <Stack.Screen
          name="DailyTarget"
          component={DailyTarget}
          options={{ title: "DailyTarget" }}
        />
        <Stack.Screen
          name="SetTarget"
          component={SetTarget}
          options={{ title: "SetTarget" }}
        />
        <Stack.Screen
          name="TrackYourHealthMain"
          component={TrackYourHealthMain}
          options={{ title: "TrackYourHealthMain" }}
        />
        <Stack.Screen
          name="AddDrinks"
          component={AddDrinks}
          options={{ title: "AddDrinks" }}
        />
        <Stack.Screen
          name="DrinksInventory"
          component={DrinksInventory}
          options={{ title: "DrinksInventory" }}
        />
        <Stack.Screen
          name="SetUpDrinks"
          component={SetUpDrinks}
          options={{ title: "SetUpDrinks" }}
        />
        <Stack.Screen
          name="AddFruits"
          component={AddFruits}
          options={{ title: "AddFruits" }}
        />
        <Stack.Screen
          name="FruitsInventory"
          component={FruitsInventory}
          options={{ title: "FruitsInventory" }}
        />
        <Stack.Screen
          name="SetUpFruits"
          component={SetUpFruits}
          options={{ title: "SetUpFruits" }}
        />
        <Stack.Screen
          name="AddMeats"
          component={AddMeats}
          options={{ title: "AddMeats" }}
        />
        <Stack.Screen
          name="MeatsInventory"
          component={MeatsInventory}
          options={{ title: "MeatsInventory" }}
        />
        <Stack.Screen
          name="SetUpMeats"
          component={SetUpMeats}
          options={{ title: "SetUpMeats" }}
        />
        <Stack.Screen
          name="AddOthers"
          component={AddOthers}
          options={{ title: "AddOthers" }}
        />
        <Stack.Screen
          name="OthersInventory"
          component={OthersInventory}
          options={{ title: "OthersInventory" }}
        />
        <Stack.Screen
          name="SetUpOthers"
          component={SetUpOthers}
          options={{ title: "SetUpOthers" }}
        />
        <Stack.Screen
          name="AddSauce"
          component={AddSauce}
          options={{ title: "AddSauce" }}
        />
        <Stack.Screen
          name="SauceInventory"
          component={SauceInventory}
          options={{ title: "SauceInventory" }}
        />
        <Stack.Screen
          name="SetUpSauce"
          component={SetUpSauce}
          options={{ title: "SetUpSauce" }}
        />
        <Stack.Screen
          name="AddVegetables"
          component={AddVegetables}
          options={{ title: "AddVegetables" }}
        />
        <Stack.Screen
          name="SetUpVegetables"
          component={SetUpVegetables}
          options={{ title: "SetUpVegetables" }}
        />
        <Stack.Screen
          name="VegetablesInventory"
          component={VegetablesInventory}
          options={{ title: "VegetablesInventory" }}
        />
        <Stack.Screen
          name="DashBoaord"
          component={Dashboard}
          options={{ title: "DashBoaord" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
