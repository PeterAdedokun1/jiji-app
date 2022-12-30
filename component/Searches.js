import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Center } from 'native-base'

const  Searches = () => {
  return (
    <View>
      <Center style={{ display: "flex", height: "94%", marginHorizontal: 30, justifyContent: "center", alignContent: "center", textAlign: "center" }}>
        <Image source={require('../assets/phone.jpeg')} marginLeft={0} marginBottom={20} alt="Message" width={5} height={15} />
        <Text>You don't have favoutire searches yet</Text>
        <Text style={{textAlign: "center",marginTop: 10, color:"#a9a9a9"}} >Try saving a search! Get notified of new results! Save your favorite  search pages by tapping the star icon</Text>
      </Center>
    </View>
  )
}

export default  Searches

  
  
  
  
 