import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BordImg2 from '../../../assets/images/onbord2.png';
import Slid2 from '../../../assets/images/slid2.png';
import On2 from '../../../assets/images/on2.png';
import color from '../../../../constant/color';


const OnbordScreenb = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.skipContainer}>
        <Text style={styles.skipText} onPress={() => navigation.navigate('Signup')}>
          SKIP
        </Text>
      </View>

      <View style={styles.content}>
        <Image style={styles.mainImage} source={BordImg2} />
        <Text style={styles.title}>Plan Your Dream Trip With Tourplace</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Mi ultricies ultrices fermentum
          a. Duis neque lectus pharetra ac sed lorem
        </Text>
      </View>

      <View style={styles.footer}>
        <Image style={styles.slider} source={Slid2} />
        <Image style={styles.nextBtn} source={On2} />
      </View>
    </SafeAreaView>
  );
};

export default OnbordScreenb;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  skipContainer: {
    alignItems: 'flex-end',
    marginTop: 30,
    paddingHorizontal: 25,
  },
  skipText: {
    fontSize: 18,
    color: '#000',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    width: 362,
    height: 343,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'auto',
    width: 305,
    paddingTop: 30,
  },
  description: {
    fontSize: 14,
    textAlign: 'justify',
    width: 306,
    paddingTop: 30,
    fontWeight: '500',
    color: color.text,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  slider: {
    width: 56,
    height: 8,
  },
  nextBtn: {
    width: 60,
    height: 60,
  },
});
