import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Veri from '../../../../assets/images/verify.png';
import color from '../../../../../constant/color';
import Button from '../../LoginScreen/Button';

const OtpScreen = ({route,navigation}) => {
   const { from } = route.params || {}
 const [otp1,setOtp1] =useState('')
 const [otp2,setOtp2] =useState('')
 const [otp3,setOtp3] =useState('')
 const [otp4,setOtp4] =useState('')

  const handleVerify = () => {
    if (from === 'Signup') {
      navigation.navigate('Login');
    } else if (from === 'Forget') {
      navigation.navigate('Reset');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="leftcircle" size={24} color="black" />
        <Text style={styles.text}>Verify</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.img} source={Veri} />
        <Text style={styles.title}>Enter OTP</Text>
        <Text style={styles.description}>An 4 digit OTP has been sent to</Text>
        <Text style={styles.number}>+91 123456789</Text>
        <View style={{flexDirection:'row'}}>
          <TextInput
            style={styles.input}
            value={otp1}
            onChangeText={setOtp1}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            style={styles.input}
            value={otp2}
            onChangeText={setOtp2}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            style={styles.input}
            value={otp3}
            onChangeText={setOtp3}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            style={styles.input}
            value={otp4}
            onChangeText={setOtp4}
            keyboardType="numeric"
            maxLength={1}
          />
        </View>
        <View>
        <Button text={'Verify'}
        onPress={handleVerify}/>
        </View>
         <View style={{flexDirection:'row',gap:5,alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity>
           <Text style={{color:color.text}}>Resend OTP</Text> 
          </TouchableOpacity>
          <Text>(00:12)</Text>
        </View>
      
        </View>
        
       
    
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    
  },
  img: {
    width: 240,
    height: 234,
    alignSelf: 'center',
  },
  input: {
    color: 'black',
    textAlign: 'center',
    borderColor: color.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 22,
    fontSize: 25,
    marginTop: 70,
    marginHorizontal: 20,
    width: 57,
    height: 52,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
     alignSelf: 'center',
    width: 305,
    paddingTop: 30,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
     alignSelf: 'center',
    width: 306,
    paddingTop: 10,
    fontWeight: '500',
    color: color.text,
  },
  number: {
    fontSize: 15,
    paddingTop: 5,
     alignSelf: 'center',
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 25,
    paddingLeft: 10,
    position: 'relative',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    left: 0,
    right: 0,
    paddingTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
