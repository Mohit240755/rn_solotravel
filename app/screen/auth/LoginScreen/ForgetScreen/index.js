import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Forg from '../../../../assets/images/forgot.png';
import color from '../../../../../constant/color';
import Button from '../../LoginScreen/Button';

import {Formik} from 'formik';
import * as Yup from 'yup';

const ForgetScreen = ({navigation}) => {
  const validationSchema = Yup.object().shape({
    number: Yup.string()
      .required('Mobile number is required')
      .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits'),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="leftcircle" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.text}>Forgot</Text>
      </View>

      <Formik
        initialValues={{number: ''}}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          navigation.navigate('Otp', {from: 'Forget'});
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.content}>
            <Image style={styles.img} source={Forg} />
            <Text style={styles.title}>Forgot Password?</Text>
            <Text style={styles.description}>
              Don’t worry! it happens. Please enter phone number associated with
              your account
            </Text>

            <Text style={styles.name}>Enter Your Mobile Number</Text>
            <TextInput
              style={styles.input}
              value={values.number}
              onChangeText={handleChange('number')}
              onBlur={handleBlur('number')}
              keyboardType="numeric"
              maxLength={10}
              placeholder="+91 123456789"
            />
            {touched.number && errors.number && (
              <Text style={styles.errorText}>{errors.number}</Text>
            )}

            <Button text={'Send OTP Code'} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default ForgetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    paddingLeft: 30,
    paddingTop: 70,
  },
  img: {
    width: 225,
    height: 234,
    alignSelf: 'center',
  },
  input: {
    color: 'black',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    marginLeft: 30,
    marginTop: 10,
    width: 350,
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
  errorText: {
    color: 'red',
    marginLeft: 30,
    marginTop: 5,
    fontSize: 14,
  },
});
