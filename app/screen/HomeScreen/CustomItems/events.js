import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import color from '../../../../constant/color';


const Events = ({image, title, location}) => {
  
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
                    alignSelf: 'flex-end',
                    top: 10,
                    right: 10,
                    borderRadius: 50,
                    backgroundColor: 'white',
                    width: 27,
                    height: 27,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FontAwesome name="bookmark" size={14} color={color.icon} />
                </View>
        <View style={{position: 'absolute', bottom: 10, left: 10}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>
            {title}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Entypo name="location-pin" size={15} color="white" />
            <Text style={{color: 'white', fontSize: 15}}>{location}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({});
