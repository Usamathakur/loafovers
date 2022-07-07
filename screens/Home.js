import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Catagories from '../components/Catagories'
import RestaurantItem, { localHomes } from '../components/RestaurantItem'
import BottomTabs from '../components/BottomTabs'
import { Divider } from 'react-native-elements'

const Home = () => {
  const [homesData, setHomesData] = useState(localHomes);
  return (
    <SafeAreaView style={{backgroundColor:'#eee'}}>
        <StatusBar/>
        <View style={{backgroundColor: 'white', padding:15}}>
          <HeaderTabs/>
          <SearchBar />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Catagories/>
          <RestaurantItem homesData={homesData}/>
        </ScrollView>
        <Divider style={{width:1}}/>
        <BottomTabs/>   
    </SafeAreaView>
      
  )
}



export default Home