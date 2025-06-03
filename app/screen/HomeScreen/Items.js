import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';


const Items = ({image,title}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 15,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          width: 82,
          height: 82,
          marginHorizontal:10,
          marginVertical:30,
          paddingVertical:20,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: 0.25,
          shadowRadius: 8,
          elevation: 5,
        }}>
        <Image style={{width: 28, height: 28}} source={image} />
        <Text style={{marginTop: 5, fontSize: 12}}>{title}</Text>
      </View>
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({});
