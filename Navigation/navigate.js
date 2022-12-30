
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View ,Image} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeBaseProvider, Box } from 'native-base';
import HomeScreen from "../screens/HomeScreen";
import Favourite from "../screens/Favourite";
import Messages from "../screens/Messages"
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import SingleProduct from "../screens/SingleProduct";
import Plus from "../screens/Plus";
const Tabs = createBottomTabNavigator();

//
import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler';
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <NativeBaseProvider >
       <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: () => { }

        })}
      >
          <Tabs.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: "center", justifyContent: "center", top: 1 }}>
                  <Image
                    source={require("../assets/home...jpeg")}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 35,
                      color: focused ? "black" : "#748c94"
                    }}
                  />
                  <Text style={{fontSize: 10}}  >
                    Home
                  </Text>

                </View>
              )
            }}
          />
          <Tabs.Screen
            name="Favorite"
            component={Favourite}
             options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: "center", justifyContent: "center", top: 1 }}>
                  <Image
                    source={require("../assets/favourite.jpeg")}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 35,
                      color: focused ? "black" : "#748c94"
                    }}
                  />
                  <Text style={{fontSize: 10}}   >
                    Favourite
                  </Text>

                </View>
              )
            }}
          />
          <Tabs.Screen
            name="Messages"
            component={Plus}
             options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: "center", justifyContent: "center", top: 1}}>
                  <Image
                    source={require("../assets/plus.jpeg")}
                    resizeMode="contain"
                    style={{
                      width: 50,
                      height: 190,
                      color: focused ? "black" : "#748c94"
                    }}
                  />
                </View>
              )
            }}
          />
          <Tabs.Screen
            name="Profile"
            component={Messages}
             options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: "center", justifyContent: "center", top: 1 }}>
                  <Image
                    source={require("../assets/messages.jpeg")}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 35,
                      color: focused ? "black" : "#748c94"
                    }}
                  />
                  <Text style={{fontSize: 10}}  >
                    Messages
                  </Text>

                </View>
              )
            }}
          />
          <Tabs.Screen
            name="Profiles"
            component={Profile}
             options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: "center", justifyContent: "center", top: 1 }}>
                  <Image
                    source={require("../assets/profile.jpeg")}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 35,
                      color: focused ? "black" : "#748c94"
                    }}
                  />
                  <Text style={{fontSize: 10}}  >
                    Profile
                  </Text>

                </View>
              )
            }}
          />

          

        </Tabs.Navigator>
        
      {/* <Stack.Navigator>
      <Stack.Screen name="Home" component={SingleProduct} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator> */}
        </NavigationContainer>

      
    </NativeBaseProvider>

     
      
      </>
  )
}
















