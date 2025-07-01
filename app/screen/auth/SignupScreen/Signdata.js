import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';

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

const SignData = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(true);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    number: Yup.string()
      .required('Mobile number is required')
      .matches(/^\d{10}$/, 'Mobile number must be 10 digits'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
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
        initialValues={{ name: '', number: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          navigation.navigate('Otp', { from: 'Signup' });
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <Text style={style.name}>Enter Your Name</Text>
            <TextInput
              style={style.input}
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              placeholder="Enter your name"
            />
            {touched.name && errors.name && (
              <Text style={style.errorText}>{errors.name}</Text>
            )}

            <Text style={style.name1}>Enter Your Mobile Number</Text>
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

            <Text style={style.name1}>Enter Your Email</Text>
            <TextInput
              style={style.input}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {touched.email && errors.email && (
              <Text style={style.errorText}>{errors.email}</Text>
            )}

            <Text style={style.name1}>Enter Your Password</Text>
            <View style={style.container1}>
              <TextInput
                style={style.input1}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
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

            <Button text="Send OTP Code" onPress={handleSubmit} />
          </View>
        )}
      </Formik>

      <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
        <Text style={{ fontSize: 20, color: color.text }}>
          Already have an account ?
        </Text>
        <Text
          style={{ color: color.Primary, fontSize: 20 }}
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </Text>
      </View>

      <Text
        style={{
          alignSelf: 'center',
          fontSize: 25,
          color: color.text,
          paddingVertical: 5,
        }}
      >
        or
      </Text>

      <Social img={Google} text={'Continue with Google'} />
      <View style={{ marginTop: 10 }}>
        <Social img={Facebook} text={'Continue with Facebook'} />
      </View>

      <Text
        style={{
          alignSelf: 'center',
          fontSize: 25,
          color: color.text,
          paddingVertical: 5,
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

export default SignData;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
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
  errorText: {
    color: 'red',
    marginLeft: 30,
    fontSize: 14,
    marginTop: 5,
  },
});
