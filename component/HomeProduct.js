import React from 'react'
import { Text, ScrollView, Flex, Image, Pressable } from 'native-base'
import { StyleSheet ,View} from 'react-native'
import { product } from "../data/Product"
import Car from '../component/Car'
import SingleProduct from '../screens/SingleProduct'
import { useNavigation } from '@react-navigation/native'

const HomeProduct = () => {
    const navigation = useNavigation()
  return (
      <ScrollView flex={1}  showsVerticalScrollIndicator={false}>
          <Flex flexWrap="wrap"
              direction='row'
              justifyContent="space-between"
              marginTop={1}
          >
              {product.map((product) => (
                  <Pressable
                    // onPress={() => navigation.navigate(SingleProduct)}  
                      key={product.id}
                      w="33%"
                      pt={0.2}
                      overflow="hidden"
                  >
                      <Image
                          source={{ uri: product.image }}
                          alt="dddd"
                          width="full"
                          h={24}
                      />
                      <Text fontWeight={500} color="red" mx={7}>{product.text}</Text>
                  </Pressable>
                ))}
              
          </Flex>
          <Car />
   </ScrollView>
  )
}

export default HomeProduct
const styles = StyleSheet.create({
    imgContainer: {
        display: "flex",
    }
})
