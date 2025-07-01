import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import color from '../../../../constant/color';

const Drawer = ({text}) => {
  return (

    <View
      style={{
         paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: color.border,
      }}>
      <TouchableOpacity
       
        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
          }}>
        {text}
        </Text>
        <AntDesign name="right" size={20} color="black" />
      </TouchableOpacity>
      
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
