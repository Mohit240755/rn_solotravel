import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../../../../constant/color';

const Profiless = ({image,text}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          marginTop: 20,
          backgroundColor:'white',
          elevation:5,
          borderRadius:10,
          width: '100%',
          height: 58,
          justifyContent: 'center',
          paddingHorizontal: 5,
        }}>
        <TouchableOpacity style={{marginVertical:15,flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{flexDirection: 'row',gap:10}}>
            <Image style={{width: 22, height: 22}} source={image} />
            <Text style={{fontWeight: 500, fontSize: 18}}>{text}</Text>
          </View>
          <AntDesign name="right" size={24} color={color.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profiless;

const styles = StyleSheet.create({});
