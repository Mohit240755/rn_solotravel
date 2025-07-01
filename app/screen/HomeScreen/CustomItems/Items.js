import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';


const Items = ({image,title}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center',marginTop:20}}>
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
          width: 90,
          height:90,
          marginVertical:5,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: 0.25,
          shadowRadius: 8,
          elevation: 5,
        }}>
        <Image style={{width: 35, height: 35}} source={image} />
        <Text style={{marginTop: 5, fontSize: 15}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({});
