import {Image, StyleSheet, Text, TextInput, View, FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Hom from '../../assets/images/homeimg.png';
import Hom1 from '../../assets/images/homeimg1.png';
import Hom2 from '../../assets/images/homeimg2.png';
import Logo from '../../assets/images/logo1.png';
import Ic from '../../assets/images/icon.png';
import color from '../../../constant/color';

import Items from './Items';
import {Data} from '../../../constant/Data';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Image style={{width: 475, height: 200}} source={Hom} />
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 16,
            marginVertical: 20,
          }}>
          <Image style={{width: 44, height: 44}} source={Hom2} />
          <Image style={{width: 44, height: 44}} source={Hom1} />
        </View>
        <View>
          <Image
            style={{width: 222, height: 53, alignSelf: 'center'}}
            source={Logo}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 38,
            borderRadius: 15,
            marginHorizontal: 10,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 10},
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 5,
            backgroundColor: 'white',
          }}>
          <Image
            style={{
              width: 25,
              height: 25,
              marginHorizontal: 10,
              marginVertical: 12,
            }}
            source={Ic}
          />
          <TextInput
            style={{
              fontSize: 18,
              height: 50,
              width: 350,
            }}
            placeholder="Search any place ...."></TextInput>
        </View>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 22, fontWeight: 600}}>Categories</Text>
            <Text style={{fontSize: 15, color: color.Primary, fontWeight: 400}}>
              See All...
            </Text>
          </View>
          <FlatList
            data={Data}
            renderItem={({item}) => (
              <Items image={item.image} id={item.id} title={item.title} />
            )}
            keyExtractor={item => item.id}
            horizontal
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text style={{fontSize: 22, fontWeight: 600}}>Most Visited</Text>
            <Text style={{fontSize: 15, color: color.Primary, fontWeight: 400}}>
              See All...
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});
