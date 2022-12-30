import React from 'react'
import { Text, HStack, Input, View, ScrollView, Box } from 'native-base';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
    const HomeSearch = () => {
        return (
  <View style={{ backgroundColor:"#3db83a", alignItems: "center", paddingBottom: 10 }} safeAreaTop>
        <View>
         <Text style={{paddingTop: 90, color: "#fff", fontSize: 24, textAlign: "center", fontWeight: "300"}}>What are you looking for?</Text> 
        </View>
                  
        <HStack w='full' px={5} py={6} mr={10} alignItems="center">
        <Ionicons style={styles.search} name="search-sharp" size={27} color="#a9a9a9" /><Input placeholder='Type your Search Here' width="100%" type='search' 
                        h={12}
                        bg="white"
                        fontSize={20}
                        paddingLeft={9}
                        paddingRight={9}
                        variant ="filled"
                        _focus={{
                            bg: 'white'
                        }}
                    />
                 <AntDesign style={styles.menu} name="menu-fold"  size={24} color="#a9a9a9"  />
        </HStack>  
    </View>
      
  )
}

export default HomeSearch

const styles = StyleSheet.create({
    search: {
        left: 30,
        zIndex: 9999
    },
    menu: {
        position: 'relative',
        zIndex: 999,
        right: 34,
    }
})