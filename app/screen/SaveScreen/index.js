import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react'

const SavedScreen = ({navigation}) => {
  return (
      <SafeAreaView style={{flex:1,marginHorizontal:16}}>
     <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()} >
             <AntDesign name="leftcircle" size={24} color="black" />
             <Text style={styles.text} >Saved</Text>
             </TouchableOpacity>
             </SafeAreaView>
  )
}

export default SavedScreen;

const styles = StyleSheet.create({
   header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingTop: 50,
    paddingLeft: 10,
    position:"relative",
    alignItems:"center"
  },
   text:{
      position:"absolute",
      left:0,
      right:0,
      paddingTop:40,
      textAlign:"center",
      fontWeight:"bold",
      fontSize:25,
    }
})