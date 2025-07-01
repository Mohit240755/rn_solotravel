import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import color from '../../../../constant/color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';

const PlaceDetail = ({navigation,image, title, rate, location, price}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: 350}}>
        <ImageBackground source={image} style={{width: 'full', height: 400}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
       <AntDesign name="left" size={24} color="white" />
      </TouchableOpacity>
            <Text style={styles.text}>Place Detail</Text>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          paddingHorizontal: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 20,
          }}>
          <Text style={{fontWeight: 600, fontSize: 20}}>{title}</Text>
          <Text style={{fontWeight: 600, fontSize: 20}}>{price}</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 5, paddingTop: 5}}>
          <FontAwesome6 name="location-dot" size={16} color={color.icon} />
          <Text style={{color: color.icon, fontSize: 13}}>{location}</Text>
        </View>
        <View style={styles.iconTextRow}>
          <FontAwesome name="star" size={18} color={color.Primary} />
          <Text style={styles.ratingText}>{rate}</Text>
          <Text style={{color: color.icon}}>(150 Reviews)</Text>
        </View>
        <View
          style={{
            paddingTop: 30,
          }}>
          <Text style={{fontSize: 20, fontWeight: 600}}>About</Text>
          <Text style={{color: color.icon, paddingTop: 5}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, arcu
            dictumst habitant vel ut et pellentesque. Ut in egestas blandit
            netus in scelerisque. Eget lectus ultrices pellentesque id.Arcu,
            arcu dictumst habitant vel ut et pellentesque. Ut in egestas blandit
            netus in scelerisque. Eget lectus ultrices pellentesque id.
          </Text>
          <TouchableOpacity>
            <Text style={{color: color.Primary, paddingTop: 8}}>
              Read More ...
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingTop: 30,
          }}>
          <Text style={{fontSize: 20, fontWeight: 600}}>Facilities</Text>
          <View style={{paddingTop: 5}}>
            <View style={{flexDirection: 'row', gap: 5}}>
              <AntDesign name="check" size={20} color={color.icon} />
              <Text style={{color: color.icon, fontSize: 15, fontWeight: 500}}>
                Free Wifi
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 5}}>
              <AntDesign name="check" size={20} color={color.icon} />
              <Text style={{color: color.icon, fontSize: 15, fontWeight: 500}}>
                Pool
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 5}}>
              <AntDesign name="check" size={20} color={color.icon} />
              <Text style={{color: color.icon, fontSize: 15, fontWeight: 500}}>
                Breakfast
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 5}}>
              <AntDesign name="check" size={20} color={color.icon} />
              <Text style={{color: color.icon, fontSize: 15, fontWeight: 500}}>
                Lunch
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent:'space-between', paddingVertical: 35}}>
            <View
              style={{
                width: 52,
                height: 52,
                borderRadius: 50,
                backgroundColor:'#fff',
                elevation:5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome name="bookmark" size={25} color={color.Primary} />
            </View>
            <TouchableOpacity>
              <View
                style={{
                  width: 320,
                  height: 50,
                  borderRadius: 30,
                  backgroundColor: color.Primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white',fontWeight:600,fontSize:20}}>Book Now</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlaceDetail;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 50,
    paddingLeft: 10,
    position: 'relative',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    paddingTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  iconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingTop: 4,
  },
  ratingText: {
    fontWeight: '600',
    fontSize: 14,
  },
});