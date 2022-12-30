import { View, Text } from "react-native"
import { Select ,Center, Image} from "native-base";
import { useState } from "react";


const Messages = () => {
  const [ratings, setRatings] = useState("")
  return (
      <View >
      <View style={{ backgroundColor: "#3db83a", alignItems: "center" }} safeAreaTop>
        <Text style={{ paddingTop: 60, paddingBottom: 16,  color: "#fff", fontSize: 17, textAlign: "center", fontWeight: "600" }}>Chats</Text>
      </View>
      <Select bg="white" placeholder="Active" borderWidth={0} color="blue.900" fontSize={17} >
        <Select.Item
          label="Active"
          value="1"
          borderBottomWidth={1}
          borderColor="#d3d3d3"
          paddingLeft="42%"
        />
        <Select.Item
           label="Archived"
          value="1"
          borderBottomWidth={1 }
          borderColor="#d3d3d3"
          paddingLeft="42%"
        />
        <Select.Item
           label="Spam"
          value="1"
          borderBottomWidth={1}
          borderColor="#d3d3d3"
          paddingLeft="42%"
        />
      </Select>

      <View style={{ display: "flex", height: "75%", marginHorizontal: 90, justifyContent: "center", alignContent: "center", textAlign: "center" }}>
        <Image source={require('../assets/fly.jpeg')} marginLeft={50} alt="Message" width={20} height={20} />
        <Text>You don't have messages yet</Text>
      </View>

    </View>
  )
}

export default Messages