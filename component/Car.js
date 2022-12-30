import { View, Text, ScrollView,  Flex, Image, Box  } from 'native-base';
import { StyleSheet  } from 'react-native';
import { product2 } from '../data/Product';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Car = () => {
  return (
      
        <View style={{ paddingTop: 0, paddingLeft: 10, paddingRight: 13, backgroundColor: "#f0f8ff", fontWeight: 900,}} color="#a9a9a9" >
            <Text my={2} fontSize="14" fontWeight={700}>Trending</Text>
                {product2.map((product) => {

                    return <View style={styles.card} key={product.id}>
                    <View style={styles.carFlex} flexDirection="row" alignItems="center" >
                        <View style={{ paddingRight: 15 }} marginBottom ="5"  >
                          <Image source={{uri: product.img}} alt="dddd" size="xl" />
                        </View>
                          <View >
                              <Text style={{color: "#303A4B", fontSize: 13, fontWeight: "medium"}}  >{product.carName}</Text>
                              <View flexDirection="row" style={{marginTop: 15, marginBottom: 15, fontWeight: "medium"}}>
                                  <Text style={{backgroundColor: "#f0f8ff", fontSize: 10, fontWeight: "meduim"}}>{product.used}</Text>
                                <Text style={{ marginLeft: 7, backgroundColor: "#f0f8ff",   fontSize: 10 , paddingHorizontal: 5}} >{ product.mode}</Text>
                              </View>
                      
                          <Text style={{ fontSize: 12, color: "#808080", fontWeight: "meduim" }}>{product.location}
                          </Text>
                            <Text color="#3db83a" mb={5} fontWeight="bold">{product.price}</Text>
                        </View>
                        
                        </View>
                      <View flexDirection="row" mt={-5} borderTopWidth="1" borderTopColor="#c0c0c0" color="black" justifyContent="space-around" >
                        <View flexDirection="row" pb={2} borderRightWidth= {1}  pt={1} borderRightColor="#c0c0c0" pr={20}>
                       <Ionicons style={{marginTop: 4}} name="chatbox-ellipses-sharp" size={16}  color="black" />
                      <Text ml={1}   borderBottomWidth= {4}  borderBottomColorColor="#c0c0c0" borderRightColor="black">{product.chat}
                          </Text>
                          </View>

                        <View flexDirection="row" mt={2} >
                          <MaterialIcons name="call" size={20}  color="black" />
                            <Text ml={1} >{product.call}</Text>
                          
                              </View>
                     </View>   
         </View>
            })}      
    </View>
     
  )
}

export default Car

const styles = StyleSheet.create({
    carImage: {
        paddingRight: 15
  },
    card: {  
    backgroundColor: 'white',  
    borderRadius: 8,  
    width: '100%',  
    marginVertical: 10,  
    shadowColor: '#52006A',  
  },  
})
