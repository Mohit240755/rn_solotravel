import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Forg from '../../../../assets/images/forgot.png';
import color from '../../../../../constant/color';
import Button from '../../LoginScreen/Button';

const ForgetScreen = ({navigation}) => {
  const [number, setNumber] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="leftcircle" size={24} color="black" />
        <Text style={styles.text}>Forgot</Text>
      </View>
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
          value={number}
          onChangeText={setNumber}
          keyboardType="numeric"
          maxLength={10}
          placeholder="+91 123456789"
        />
        <View>
          <Button
            text={'Send OTP Code'}
            onPress={() => navigation.navigate('Otp',{ from: 'Forget' })}
          />
        </View>
      </View>
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
