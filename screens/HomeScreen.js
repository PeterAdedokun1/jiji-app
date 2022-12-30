import { View, Text,Box,  } from 'native-base'
import HomeSearch from '../component/HomeSearch'
import HomeProduct from '../component/HomeProduct'
function HomeScreen() {
  return (
    <Box flex={1} style={{backgroundColor: "#f8f7f7", }}>
      <HomeSearch />
      <HomeProduct />
    </Box>
  )
}

export default HomeScreen
// #EEFAE6
// #f8f7f7