import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import color from '../../../../constant/color'

const Social = ({img,text}) => {
  return (
    <>
    <View>
        <TouchableOpacity style={{
            borderWidth:2,
            borderColor:color.border,
            borderRadius:15,
            flexDirection:"row",
            alignSelf:"center",
            alignItems:"center",
            justifyContent:"center",
            gap:15,
            width:350,
            height:50,
        }}>
            <Image style={{height:24,width:24}} source={img}/>
            <Text style={{fontSize:18,fontWeight:500}}>{text}</Text>
        </TouchableOpacity>
    </View>
    </>
  )
}

export default Social