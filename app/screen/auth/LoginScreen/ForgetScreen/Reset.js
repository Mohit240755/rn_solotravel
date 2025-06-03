import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Rest from '../../../../assets/images/reset.png'
import color from '../../../../../constant/color';
import Button from '../../LoginScreen/Button';

const ResetScreen = ({navigation}) => {
  const [password, setPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="leftcircle" size={24} color="black" />
        <Text style={styles.text}>Reset</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.img} source={Rest} />
        <Text style={styles.title}>Reset Your Password</Text>
        <Text style={styles.description}>
          Now you can reset your old Password
        </Text>
         <Text style={styles.name}>Enter a new Password</Text>
                <View style={styles.container1}>
                  <TextInput
                    style={styles.input}
                    value={showPassword}
                    keyboardType="default"
                    secureTextEntry={showPassword}
                    placeholder="*************"
                  />
                   <Ionicons
                      name={showPassword ? "eye-sharp" : "eye-off-sharp"}
                      size={24}
                      color="#D1D1D1"
                      onPress={() => setShowPassword(!showPassword)}
                    />
                 
                </View>
         <Text style={styles.name1}>Confirm new Password</Text>
                <View style={styles.container1}>
                  <TextInput
                    style={styles.input}
                    value={password}
                    keyboardType="default"
                    secureTextEntry={password}
                    placeholder="*************"
                  />
                   <Ionicons
                      name={password ? "eye-sharp" : "eye-off-sharp"}
                      size={24}
                      color="#D1D1D1"
                      onPress={() => setPassword(!password)}
                    />
                 
                </View>
        <View>
          <Button
            text={'Submit'}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
    container1: {
    alignItems: 'center',
    flexDirection: 'row',
    // padding: 2,
    width: '90%',
    marginLeft: 30,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
    height: 48,
  },
  name: {
    fontSize: 20,
    paddingLeft: 30,
    paddingTop: 70,
  },
  name1: {
    fontSize: 20,
    paddingLeft: 30,
    paddingTop: 30,
  },
  img: {
    width: 350,
    height: 230,
    alignSelf: 'center',
  },
  input: {
    color: 'black',
    fontSize: 18,
    marginHorizontal:10,
    width: 300,
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
