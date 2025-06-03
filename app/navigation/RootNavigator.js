import { StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'


import SplashScreen from '../screen/SplashScreen';
import OnbordScreen from '../screen/OnbordScreen';
import SignupScreen from '../screen/auth/SignupScreen';
import OtpScreen from '../screen/auth/SignupScreen/OTPScreen';
import LoginScreen from '../screen/auth/LoginScreen';
import ConScreen from '../screen/auth/LoginScreen/Congratulation';
import ForgetScreen from '../screen/auth/LoginScreen/ForgetScreen';
import ResetScreen from '../screen/auth/LoginScreen/ForgetScreen/Reset';
import HomeScreen from '../screen/HomeScreen';
import OnbordScreenb from '../screen/OnbordScreen/OnScreenB';
import OnbordScreena from '../screen/OnbordScreen/OnScreenA';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigation from './MainTabNavigation';
import Items from '../screen/HomeScreen/Items';
import Vieww from '../screen/HomeScreen/view';


const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
   
    <View style = {styles.container}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='Splash' component={SplashScreen}/>
    <Stack.Screen name='Onbord' component={OnbordScreen}/>
    <Stack.Screen name='Onborda' component={OnbordScreena}/>
    <Stack.Screen name='Onbordb' component={OnbordScreenb}/>
    <Stack.Screen name='Signup' component={SignupScreen}/>
    <Stack.Screen name='Otp' component={OtpScreen}/>
    <Stack.Screen name='Login' component={LoginScreen}/>
    <Stack.Screen name='Congratulation' component={ConScreen}/>
    <Stack.Screen name='Forget' component={ForgetScreen}/>
    <Stack.Screen name='Reset' component={ResetScreen}/>
     <Stack.Screen name='Main' component={MainTabNavigation}/>
    {/* <Stack.Screen name='View' component={Vieww}/> */}
    
   
    
    </Stack.Navigator>
    </View>
    
  )
}
export default RootNavigator;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
})