import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '..';
import CategoriesScreen from '../CategoriesScreen';
import VisitScreen from '../VisitScreen';
import PlaceDetailScreen from '../PlaceDetailScreen';
import SearchScreen from '../SearchScreen';
import ProfileScreen from '../ProfileScreen';
import SearchResultScreen from '../SearchResultScreen';

const Stack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen name="Categeries" component={CategoriesScreen} />
      <Stack.Screen name="Visit" component={VisitScreen} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="SearchResult" component={SearchResultScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;

const styles = StyleSheet.create({});
