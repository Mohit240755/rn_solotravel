import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from './Button';
import color from '../../../../constant/color';
import Google from '../../../assets/images/google.png';
import Facebook from '../../../assets/images/facebook.png';
import Social from './Social';

const Detail = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(true);

  // Yup validation schema
  const validationSchema = Yup.object().shape({
    number: Yup.string()
      .required('Mobile number is required')
      .matches(/^\d{10}$/, 'Mobile number must be 10 digits'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  return (
    <>
      <View style={style.container}>
        <Image
          style={{ height: 60, width: 244 }}
          source={require('../../../assets/images/logo.png')}
        />
      </View>

      <Formik
        initialValues={{ number: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          navigation.navigate('Congratulation');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <Text style={style.name}>Enter Your Mobile Number</Text>
            <TextInput
              style={style.input}
              value={values.number}
              onChangeText={handleChange('number')}
              onBlur={handleBlur('number')}
              keyboardType="numeric"
              maxLength={10}
              placeholder="Enter your mobile number"
            />
            {touched.number && errors.number && (
              <Text style={style.errorText}>{errors.number}</Text>
            )}

            <Text style={style.name1}>Enter Your Password</Text>
            <View style={style.container1}>
              <TextInput
                style={style.input1}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                keyboardType="default"
                secureTextEntry={showPassword}
                placeholder="Enter your password"
              />
              <Ionicons
                name={showPassword ? 'eye-sharp' : 'eye-off-sharp'}
                size={24}
                color="#D1D1D1"
                onPress={() => setShowPassword(!showPassword)}
              />
            </View>
            {touched.password && errors.password && (
              <Text style={style.errorText}>{errors.password}</Text>
            )}

            <Button text="Login" onPress={handleSubmit} />
          </View>
        )}
      </Formik>

      <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
        <Text style={{ fontSize: 20, color: color.text }}>Don't have an account ? </Text>
        <Text
          style={{ color: color.Primary, fontSize: 20 }}
          onPress={() => navigation.navigate('Signup')}
        >
          Sign Up
        </Text>
      </View>

      <TouchableOpacity>
        <Text
          style={{
            alignSelf: 'center',
            paddingVertical: 5,
            fontSize: 18,
            textDecorationLine: 'underline',
            color: color.text,
          }}
          onPress={() => navigation.navigate('Forget')}
        >
          Forget Password
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          alignSelf: 'center',
          fontSize: 25,
          color: color.text,
          paddingVertical: 15,
        }}
      >
        or
      </Text>

      <View>
        <Social img={Google} text={'Continue with Google'} />
      </View>
      <View style={{ marginTop: 15 }}>
        <Social img={Facebook} text={'Continue with Facebook'} />
      </View>

      <Text
        style={{
          alignSelf: 'center',
          fontSize: 25,
          color: color.text,
          paddingVertical: 20,
        }}
      >
        or
      </Text>

      <TouchableOpacity>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            color: '#9D9D9D',
            textDecorationLine: 'underline',
          }}
        >
          Continue as Guest
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Detail;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 65,
    gap: 10,
  },
  name: {
    fontSize: 20,
    paddingLeft: 30,
    paddingTop: 70,
  },
  name1: {
    fontSize: 20,
    paddingLeft: 30,
    paddingTop: 40,
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
  errorText: {
    color: 'red',
    marginLeft: 30,
    fontSize: 14,
    marginTop: 5,
  },
});
