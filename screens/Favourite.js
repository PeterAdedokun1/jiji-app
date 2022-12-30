import { View, Text } from "react-native"
import Tab from "../component/Tab"
const Favourite = () => {
  return (
      <>
      <View style={{ backgroundColor: "#3db83a", alignItems: "center"}} safeAreaTop>
        <Text style={{ paddingTop: 60, paddingBottom: 16,  color: "#fff", fontSize: 17, textAlign: "center", fontWeight: "600" }}>My Favourite</Text>
      </View>
      {/* <TABS/> */}
      <Tab />
      
    </>
  )
}

export default Favourite