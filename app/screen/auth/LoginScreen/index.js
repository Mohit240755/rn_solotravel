import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Detail from './Detail';





const LoginScreen = ({navigation}) => { 
  return (
    <>
    <SafeAreaView style={style.container}>
    <View style={style.header} >
      <AntDesign name="leftcircle" size={24} color="black" />
      <Text style={style.text} >Login</Text>
      <View style={{
        padding: 5, borderWidth: 1, borderRadius: 10, borderColor: "orange", height:
          30, width: 90
      }}><Text style={{ color: "red", paddingLeft: 15 }} >English</Text></View>
    </View>
    <View>
      <Detail navigation={navigation}/>
    </View>
    </SafeAreaView></>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  container:{
      flex:1,
      marginHorizontal:16,
  },
  text:{
      position:"absolute",
      left:0,
      right:0,
      paddingTop:40,
      textAlign:"center",
      fontWeight:"bold",
      fontSize:25,

  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingTop: 50,
    paddingLeft: 10,
    position:"relative",
    alignItems:"center"
  }
});
