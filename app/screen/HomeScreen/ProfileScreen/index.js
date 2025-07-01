import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Profile from '../../../assets/images/profile.png';
import Premium from '../../../assets/images/premium.png';
import color from '../../../../constant/color';
import Profiless from '../CustomItems/Profile';
import {Profiles} from '../../../../constant/Data';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 20}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="leftcircle" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.text}>My Profile</Text>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <Image source={Profile} style={{width: 108, height: 108}} />
        <Text style={{fontWeight: 600, fontSize: 25, marginTop: 10}}>
          Mohit Chandel
        </Text>
        <View style={{flexDirection: 'row', marginTop: 5, gap: 5}}>
          <Image style={{width: 24, height: 24}} source={Premium} />
          <Text style={{fontWeight: 500, fontSize: 18, color: color.text}}>
            Premium User
          </Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 5}}>
             <Text style={{fontWeight: 'bold', fontSize: 18}}>
          My Address:
        </Text>
        <Text style={{fontSize:18,fontWeight:400}}>Shimla,Himachal-174002</Text>
        </View>
     
      </View>
   
        <FlatList
          data={Profiles}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Profiless image={item.image} id={item.id} text={item.text} />
  )}
          ItemSeparatorComponent={() => <View style={{width: 15}} />}
                        contentContainerStyle={{
                          marginHorizontal: 5,
                          paddingBottom:20
                        }}
                        showsHorizontalScrollIndicator={false}
        />
      
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 50,
    paddingLeft: 10,
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    left: 0,
    right: 0,
    paddingTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
