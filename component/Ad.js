import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Center } from 'native-base'
const Ad = () => {
  return (
    <View>
      <Center style={{ display: "flex", height: "94%", marginHorizontal: 30, justifyContent: "center", alignContent: "center", textAlign: "center" }}>
        <Image source={require('../assets/phone.jpeg')} marginLeft={0} marginBottom={20} alt="Message" width={5} height={15} />
        <Text >You don't have favoutire ads yet</Text>
        <Text style={{textAlign: "center",marginTop: 10, color:"#a9a9a9"}} >'My favoutire' can help you to save ads you are interested in so that you can check them agin later</Text>
      </Center>

    </View>
  )
}

export default Ad
