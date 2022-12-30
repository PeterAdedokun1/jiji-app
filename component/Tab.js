import { useState } from "react";
import { View, Text, useWindowDimensions, StyleSheet} from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Ad from "./Ad";
import Searches from "./Searches";


const renderScene = SceneMap({
  first: Ad,
  second: Searches
})
export default function Tabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first", title: "Ads",
    },
     {
      key: "second", title: "Searches",
    }
  ])
  const renderTabs = (props) => (
    <TabBar {...props} tabStyle={styles.tabStyle} indicatorStyle={{ backgroundColor: "white" }} activeColor="#3db83a" inactiveColor="#99B2BF" renderLabel={({ route, color }) => (
      <Text style={{color, ...styles.text}} >{route.title}</Text>
    )} />
  )
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex} 
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabs}

    />
  )
}
const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: "white",
  }
})