// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider, Text } from "native-base";
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from "@expo/vector-icons/Ionicons";
import Login from './login';
import Home from './screens/home';
import Jurusan from './screens/jurusan'; // Import the Jurusan component
import Article from './screens/article'; // Import the Article component
import Account from './screens/account'; // Import the Profile component
import Button from './components/button';
import SearchBar from './components/searchbar';
import ArticleDetailScreen from './screens/article-detail';
import BakatMinat from './screens/bakat-minat';
import EditProfile from './screens/edit-profile';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Jurusan":
              iconName = "school-outline";
              break;
            case "Article":
              iconName = "newspaper-outline";
              break;
            case "Account":
              iconName = "person-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "black" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "black" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="Jurusan" component={Jurusan} options={noHead} />
      <Tab.Screen name="Article" component={Article} options={noHead} />
      <Tab.Screen name="Account" component={Account} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Camtion IT"
            component={Login}
            options={{ headerTitle: null }}
          />
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen name="Button" component={Button} />
          <Stack.Screen name="SearchBar" component={SearchBar} />
        <Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} />
        <Stack.Screen name="BakatMinat" component={BakatMinat} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
