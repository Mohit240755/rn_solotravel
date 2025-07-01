import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SaveScreen from '../../screen/SaveScreen';



const Stack = createNativeStackNavigator();
const SaveStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Save" component={SaveScreen} />
    </Stack.Navigator>
  )
}


export default SaveStack;

const styles = StyleSheet.create({})