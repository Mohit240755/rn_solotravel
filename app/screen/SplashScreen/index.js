import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import Img from '../../assets/images/logo1.png';
import color from '../../../constant/color';

const SplashScreen = ({navigation}) => {
  return (
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Onbord');
      }, [3000]);
    }),
    (
      <View
        style={{
          backgroundColor: color.Primary,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image style={{height: 85, width: 350}} source={Img} />
      </View>
    )
  );
};

export default SplashScreen;
