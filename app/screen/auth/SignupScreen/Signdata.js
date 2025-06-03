import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import color from '../../../../constant/color';
import Google from '../../../assets/images/google.png';
import Facebook from '../../../assets/images/facebook.png';
import Button from '../LoginScreen/Button';
import Social from '../LoginScreen/Social';

const SignData = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword,setShowPassword] =useState(true)

  return (
    <>
      <View style={style.container}>
        <Image
          style={{height: 60, width: 244}}
          source={require('../../../assets/images/logo.png')}
        />
      </View>
      <View>
        <Text style={style.name}>Enter Your Name</Text>
        <TextInput
          style={style.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          keyboardType="default"
        />

        <Text style={style.name1}>Enter Your Mobile Number</Text>
        <TextInput
          style={style.input}
          value={number}
          onChangeText={setNumber}
          keyboardType="numeric"
          maxLength={10}
          placeholder="Enter your mobile number"
        />

        <Text style={style.name1}>Enter Your Email</Text>
        <TextInput
          style={style.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={style.name1}>Enter Your Password</Text>
        <View style={style.container1}>
          <TextInput
            style={style.input1}
            value={password}
            onChangeText={setPassword}
            keyboardType="default"
            secureTextEntry={showPassword}
            placeholder="Enter your password"
          />
          
           <Ionicons
               name={showPassword ? "eye-sharp" : "eye-off-sharp"}
               size={24}
               color="#D1D1D1"
               onPress={() => setShowPassword(!showPassword)}
             />
         
        </View>
      </View>
      <View>
        <Button
          text="Send OTP Code"
          onPress={() => {
            if (number.length === 10 && password.length >= 6 && email && name) {
              navigation.navigate('Otp', {from: 'Signup'});
            } else {
              alert('Please fill all fields');
            }
          }}
        />
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 5}}>
        <Text style={{fontSize: 20, color: color.text}}>
          Already have an account ?
        </Text>
        <Text
          style={{color: color.Primary, fontSize: 20}}
          onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </View>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 25,
          color: color.text,
          paddingVertical: 5,
        }}>
        or
      </Text>
      <View>
        <Social img={Google} text={'Continue with Google'} />
      </View>
      <View style={{marginTop: 10}}>
        <Social img={Facebook} text={'Continue with Facebook'} />
      </View>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 25,
          color: color.text,
          paddingVertical: 5,
        }}>
        or
      </Text>
      <TouchableOpacity>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            color: '#9D9D9D',
            textDecorationLine: 'underline',
          }}>
          Continue as Guest
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default SignData;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    gap: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    paddingLeft: 30,
    paddingTop: 40,
  },
  name1: {
    fontSize: 20,
    paddingLeft: 30,
    paddingTop: 10,
  },
  input: {
    color: 'black',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    marginLeft: 30,
    marginTop: 10,
    width: '90%',
  },
  input1: {
    color: 'black',
    fontSize: 18,
    width: '90%',
  },
  container1: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 2,
    width: '90%',
    marginLeft: 30,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
    height: 50,
  },
});
