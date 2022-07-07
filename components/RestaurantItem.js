import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localHomes=[
    {
        name:'Abdullah',
        image_url:'https://images2.alphacoders.com/100/1003810.jpg',
        reviews:1234,
        rating:3.5
    },
    {
        name:'Hakim',
        image_url:'https://c4.wallpaperflare.com/wallpaper/525/416/52/sushi-food-caviar-dishes-wallpaper-preview.jpg',
        reviews:5698,
        rating:4
    },
    {
        name:'Usama',
        image_url:'https://media.istockphoto.com/photos/assorted-indian-recipes-food-various-picture-id922783734?k=20&m=922783734&s=612x612&w=0&h=_oV4oOrb8kC4RVgAI6RrGfQ8lIKsnP89lwwjHfhxUzQ=',
        reviews:7894,
        rating:4.9
    },
    {
        name:'Zaheer',
        image_url:'https://images6.alphacoders.com/439/439410.jpg',
        reviews:789456,
        rating:5
    },
    
]

export const RestaurantItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom:25}}>
        {props.homesData.map((homes,index)=>(
        <View key={index} style={{marginTop:10,padding:15,backgroundColor:'white'}}>
      <RestaurantImage image={homes.image_url}/>
      <RestaurantInfo name={homes.name} rating={homes.rating}/>
    </View>
    ))}
    </TouchableOpacity>
    
  )
}

const RestaurantImage=(props)=>{
    return(
        <>
        <Image source={{uri: props.image}} 
        style={{width:'100%',height:180}}
        />
        <TouchableOpacity style={{position:'absolute', right:20, top:20}}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='white'/>
        </TouchableOpacity>
        </>
        
    )
    
}

const RestaurantInfo=(props)=>{
    return(
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
            <View>
                <Text style={{fontSize:15,fontWeight:'bold'}}>{props.name}</Text>
                <Text style={{fontSize:13,color:'gray'}}>30-45 ~ min</Text>
            </View>
            <View style={{backgroundColor:'#eee',height:30,width:30,alignItems:'center',borderRadius:15,justifyContent:'center'}}>
                <Text>{props.rating}</Text>
            </View>
            
        </View>
        
    )
}

export default RestaurantItem