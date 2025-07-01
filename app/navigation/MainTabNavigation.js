import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './Stacks/HomeStack';
import SaveStack from './Stacks/SaveStack';
import NotificationStack from './Stacks/NotificationStack';
import ChatsStack from './Stacks/ChatsStack';
import color from '../../constant/color';

const Tap = createBottomTabNavigator();

const iconMap = {
  Home: 'home',
  Save: 'save',
  Notification: 'notification',
  Chats: 'chat',
};

const MainTabNavigation = () => {
  return (
    <Tap.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          const iconName = iconMap[route.name] || 'dot-single';
          return <Entypo name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: color.Primary,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tap.Screen name="Home" component={HomeStack} />
      <Tap.Screen name="Save" component={SaveStack} />
      <Tap.Screen name="Notification" component={NotificationStack} />
      <Tap.Screen name="Chats" component={ChatsStack} />
    </Tap.Navigator>
  );
};

export default MainTabNavigation;

const styles = StyleSheet.create({});
