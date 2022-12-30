import Navigation from "./Navigation/navigate.js"
import { View } from "native-base"
import SingleProduct from "./screens/SingleProduct.js"
import Profile from "./screens/Profile.js";
import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "react-navigation";
import 'react-native-gesture-handler';



const App = () => {
  return (
    <>
      <Navigation /> 
    </>
  )
}

export default App