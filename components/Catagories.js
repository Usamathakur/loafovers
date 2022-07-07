import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const items =[
        {
            image: require("../assets/images/bag.png"),
            text: 'Pickup'
        },
        {
            image: require("../assets/images/bread.png"),
            text: 'Leftovers'
        },
        {
            image: require("../assets/images/breakfast.png"),
            text: 'New Meal'
        },
        {
            image: require("../assets/images/map.png"),
            text: 'Location'
        },
]
const Catagories = () => {
    
  return (
    <View style={{
        marginTop:5,
        backgroundColor:'white',
        paddingVertical:10,
        paddingLeft:17
    }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item,index)=>  
      <View key={index} style={{alignItems:'center',marginRight:50}}>
      <Image source={item.image} style={{
        width:50,
        height:40,
        resizeMode:'contain'
      }}/>
      <Text style={{fontSize:13,fontWeight:"900"}}>{item.text}</Text>
      </View>
      )}
    </ScrollView>
    </View>
  )
}

export default Catagories