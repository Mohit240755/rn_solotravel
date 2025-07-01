import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStackScreen from '../../screen/HomeScreen/HomeStackScreen/index.js';
import CustomizeDrawer from '../../screen/HomeScreen/CustomizeDrawer/index.js';


const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomizeDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
    </Drawer.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
