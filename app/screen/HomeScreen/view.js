import { Image, StyleSheet, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Beach from '../../assets/images/beach1.png'

const Vieww = () => {
  return (
    <SafeAreaView style={{flex:1,marginHorizontal:16}}>
      <View >
        <Image style={{width:200,height:175,borderRadius:15,position:'absolute'}} source={Beach} />
        <View>
          <View style={{flexDirection:'row'}}>
            <Entypo name="star" size={15} color="white" />
            <Text style={{color:'white',fontSize:15}}>4.7</Text>
          </View>
        </View>
       <View style={{top:100,paddingLeft:5}}>
        <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>Cox’s Bazar Sea Beach</Text>
         <View style={{flexDirection:'row'}}>
          <Entypo name="location-pin" size={18} color="white" />
          <Text style={{color:'white'}}>Cox’s Bazar, Bangladesh</Text>
        </View>
       </View>
        
      </View>

    </SafeAreaView>
  )
}

export default Vieww;

const styles = StyleSheet.create({})