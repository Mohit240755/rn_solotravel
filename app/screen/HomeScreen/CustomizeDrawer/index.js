import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import color from '../../../../constant/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Drawer from '../CustomItems/Drawer';
import {Drow} from '../../../../constant/Data';

const CustomizeDrawer = ({navigation}) => {
  return (
    <DrawerContentScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1, marginHorizontal: 16}}>
        <View style={{marginBottom: 20}}>
          <TouchableOpacity onPress={() => navigation.closeDrawer()}>
            <Entypo name="squared-cross" size={30} color={color.Primary} />
          </TouchableOpacity>
        </View>

        <View
        //  style={
        //   {flexShrink: 1}
        //   }
          >
          <FlatList
            data={Drow}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Drawer id={item.id} text={item.text} />}
            scrollEnabled={false}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            paddingVertical: 20,
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 20,
              color: color.icon,
            }}>
            Version 1.0.0
          </Text>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              alignSelf: 'center',
              // borderWidth:2,
              width:140,
              height:50,
              borderRadius:10,
              justifyContent:'center',
              backgroundColor:'#F6F6F6'
            }}>
            <Text style={{fontWeight: '500', fontSize: 20}}>Logout</Text>
            <AntDesign name="right" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomizeDrawer;

const styles = StyleSheet.create({});
