import React from 'react'
import { View, Text, Avatar, Stack, Center, Input, Image, Button, ScrollView } from 'native-base'
import { Entypo } from '@expo/vector-icons';
const Plus = () => {
    return (
      <ScrollView>
        <View style={{ backgroundColor: "#488600", padding: 10 , }} safeAreaTop  flexDirection="row" justifyContent="space-between">
      <View style={{paddingTop: 40}} flexDirection="row">
      <Text style={{   fontSize: 17, color: "white", textAlign: "center", marginTop: 5, }}>
            Cancel
        </Text>
     </View>
      <View style={{paddingTop: 43, }}>
        <Text color="white" fontWeight={500} fontSize={19}>New Advert</Text>
          </View>
          <View style={{paddingTop: 48, color: "red"}}>
              <Entypo name="dots-three-vertical" size={20} color="white" />
          </View>
        
            </View>
            <View style={{padding: 16}}>
            <Stack space={4} w="100%" pt={1} maxW="350px" mx="auto">
                 <Input size="2xl" placeholder="Catergory" />
            </Stack>
                <Text style={{paddingBottom: 15, paddingTop: 10, fontWeight: "700", fontSize: 16, color: "#696969"}}> Images</Text>
                <Image source={require("../assets/PLUSPLUS.jpeg")} alt="image" />     
         <Text  fontSize={13} mt={15} color={"#696969"}>First picture is the title picture</Text>
                <Text fontSize={13} color={"#696969"} >Grab & drag photos to change the order</Text>
                
                <Text color={"#dcdcdc"} mt={15} >Supported formats are .jpg .gif and .png</Text>
                <Text color={"#dcdcdc"} mb={2}> Each picture must not exceed 5 Mb</Text>

                <Stack space={4}  w="100%" pt={1} pb={3} maxW="350px" mx="auto">
                 <Input size="2xl" fontSize={18} placeholder="Title" />
                </Stack>
                <Stack space={4}  w="100%" pt={1} pb={3}  maxW="350px" mx="auto">
                 <Input size="2xl" fontSize={18} placeholder="Region" />
                </Stack>
                <Stack space={4} w="100%" pt={1} pb={3}  maxW="350px" mx="auto">
                 <Input size="2xl" fontSize={18} placeholder="Description" />
                </Stack>
                <Stack space={4} w="100%" pt={1} pb={3}  maxW="350px" mx="auto">
                 <Input size="2xl" fontSize={18} placeholder="Adedokun Peter" />
                </Stack>    
                <Button mt={5} colorScheme="success" fontWeight="900">Next</Button>
                <Text color={"#696969"} mt={3} fontSize={13}>By clicking on Post Ad, you accept the Terms of Use, confirm that you will abide by the safety Tips, and declare that this posting does not include any Prohibited items</Text>
            </View>

            </ScrollView>
  )
}

export default Plus