import { View, Text, Alert } from "react-native"
import { Avatar } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const Profile = ({navigation}) => {

  return (
    <>
    <View style={{ backgroundColor: "white", padding: 10 }} safeAreaTop  flexDirection="row" justifyContent="space-between">
      <View style={{paddingTop: 40}} flexDirection="row">
        <Avatar bg="green.500" w={8} h={8} mr="1" source={{uri: "https://bit.ly/broken-link"}}>A</Avatar>
      <Text style={{   fontSize: 17, textAlign: "center", marginTop: 5, marginLeft: 3 }}>
          Adedokun Peter
        </Text>
     </View>
        <View style={{ paddingTop: 43, color: "red" }} flexDirection="row">
   <Text style={{marginRight: 10,  marginTop: 4, fontSize: 12, color: "#a9a9a9"}}>SETTINGS</Text>
          <Ionicons  name="settings" size={20} color="black" />
          
        </View>
        
      </View>
      {/*  */}
      <View flexDirection="row" justifyContent="space-between" style={{padding: 9, alignItems: "flex-start"}}>
        <View style={{ borderWidth: 1, backgroundColor: "white", borderColor: "#a9a9a9", width: 186, paddingTop: 10, paddingLeft: 15, fontSize: 90, paddingBottom: 15, }}>
          <View flexDirection="row">
        <MaterialCommunityIcons name="chart-box" style={{marginTop: 2, marginRight: 8}}  size={23} color="black" />
            
            <Text style={{ paddingBottom: 25, marginTop: 5 }}
              onPress = {() => navigation.navigate("Messages")}
            >My adverts</Text>
          </View>
          <View flexDirection="row">
            <MaterialIcons style={{marginTop: 2, marginRight: 8}} name="emoji-emotions" size={23} color="black" />
          <Text style={{marginTop: 5}}>Feedback</Text>

          </View>
        </View>
        <View>
          <View >
            <View style={{ borderWidth: 1, backgroundColor: "white", borderColor: "#a9a9a9", width: 160, padding: 16, marginBottom: 10 }} >
              <View flexDirection="row">
                <MaterialCommunityIcons name="fridge" style={{marginTop: 2, padding: 0}} size={24} color="black" />
              <Text>N0 </Text>
              </View>
              <View>
                <Text style={{paddingLeft: 25}}>MY BALANCE</Text>
              </View>
            </View>
            
        </View >
          <View style={{ borderWidth: 1, backgroundColor: "white", borderColor: "#a9a9a9", width: 160, marginBottom: 10 }}>
            <View flexDirection="row">
              <Ionicons style={{marginTop: 15, marginLeft: 20}} name="notifications" size={18} color="black" />
          <Text style={{padding: 15,}} >Notifications</Text>

            </View>
            <View flexDirection="row">
              <Ionicons style={{marginTop: 15, marginLeft: 20}} name="person" size={18} color="black" />
            <Text style={{ padding: 15}}>Followers</Text>

            </View>
        </View>
          <View flexDirection="row" style={{ borderWidth: 1, backgroundColor: "white", borderColor: "#a9a9a9", padding: 15, width: 160, marginBottom: 10,  }}>
            <FontAwesome   name="question-circle"  size={18} color="black" />
            <Text style={{ marginTop: 1, marginLeft: 9}}>FAQ</Text>
        </View>
        </View>
      </View>
        

      

  </>
  )
}

export default Profile
