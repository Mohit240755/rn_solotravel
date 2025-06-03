import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Congg from '../../../assets/images/Congrate.png';
import Button from './Button';

const ConScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.content}>
              <Image style={styles.img} source={Congg} />
              <Text style={styles.title}>You’re all set!</Text>
              <View style={{paddingTop:30}}>
          <Button
            text={'Let’s Begin'}
            onPress={() => navigation.navigate('Main')}
          />
        </View>
    </View>
    </SafeAreaView>
  )
}

export default ConScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  img: {
    width: 425,
    height: 204,
    alignSelf: 'center',
  },
    title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    alignSelf: 'center',
    width: 305,
    paddingTop: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
})