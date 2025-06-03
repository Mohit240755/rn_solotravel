import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../screen/HomeScreen';

const Stack =createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
       <Stack.Screen 
       
       name='HomeScreen'
       component={HomeScreen}
       options={{title:"Home"}}/>
    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})