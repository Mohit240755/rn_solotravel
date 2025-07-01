import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import color from '../../../../constant/color';
const Vieww = ({image, title, rate, location,isActive,onPress,navigation}) => {
  return (
    <View style={{marginHorizontal: 10, width: 200}}>
      <TouchableOpacity style={{height: 175}}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 15,
            
          }}
          source={image}
          resizeMode="cover"
        
        />
        <View
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <Entypo name="star" size={15} color="white" />
            <Text style={{color: 'white', fontSize: 18}}>{rate}</Text>
          </View>
          <View
            style={{
              borderRadius: 50,
              backgroundColor: 'white',
              width: 27,
              height: 27,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={onPress}>
              <FontAwesome
                name="bookmark"
                size={14}
                color={isActive ? color.Primary : color.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{position: 'absolute', bottom: 10, left: 10}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
            {title}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Entypo name="location-pin" size={15} color="white" />
            <Text style={{color: 'white'}}>{location}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Vieww;

const styles = StyleSheet.create({});
