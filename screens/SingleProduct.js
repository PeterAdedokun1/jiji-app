import React from 'react'
import { View, Text, Box, ScrollView, Image, Input } from 'native-base'
import { product3 } from '../data/Product'
import { useNavigation } from '@react-navigation/native'
const SingleProduct = () => {
    const navigation = useNavigation()
  
    return (
      <View>
    <View style={{ backgroundColor: "#488600", alignItems: "center" }} safeAreaTo>
        <Text style={{ paddingTop: 60,  color: "#fff", fontSize: 17, textAlign: "center",        fontWeight: "600" }}>
                Vehicles
          </Text>
         <View space={3} w='full' px={6} py= {6}>
        <Input  placeholder='Find category' color="red" bg="#f7f7f7" fontSize={16} _focus={{bg: "white"}}  /> 
          </View>
            </View>
            
            <View>
                {product3.map((product) => (
                    <View mt={2} key={product.id} borderBottomColor="#d3d3d3" borderBottomWidth={1} flexDirection="row">
                       <Image source={{uri: product.img}} alt="dddd" w={55}  h={39} mr={3} />
                        <Text textAlign="center" mt={2}>{ product.title}</Text>
                    </View>
                ))}
            </View>
      </View>
      
      
  )
}

export default SingleProduct