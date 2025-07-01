import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../../../../constant/color';
import Hotel from '../CustomItems/hotel';
import { Hotelss } from '../../../../constant/Data';
import { useNavigation, useRoute } from '@react-navigation/native';

const SearchResultScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params || {};

  const formatDate = date => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="leftcircle" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.text}>Search Result</Text>
      </View>

      <View
        style={{
          borderWidth: 0.5,
          height: 70,
          width: '100%',
          borderRadius: 20,
          marginTop: 20,
          paddingHorizontal: 10,
          paddingTop: 5,
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <Entypo name="location-pin" size={22} color={color.Primary} />
              <Text style={{ fontWeight: '600', fontSize: 20 }}>
                {item?.city || 'Unknown'}
              </Text>
            </View>
            <View style={{ paddingTop: 5 }}>
              <Text>
                {formatDate(item?.checkInDate)} to {formatDate(item?.checkOutDate)} |{' '}
                {item?.guest} Guest{item?.guest > 1 ? 's' : ''} |{' '}
                {item?.room} Room{item?.room > 1 ? 's' : ''}
              </Text>
            </View>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <AntDesign name="edit" size={18} color={color.Primary} />
            <Text style={{ fontWeight: '600' }}>Edit</Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <MaterialIcons name="short-text" size={28} color="black" />
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Sort By</Text>
          </View>
          <View>
            <Text style={{ color: color.Primary, fontSize: 18, fontWeight: '600' }}>
              Price (Low to High)
            </Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 10, flex: 1 }}>
        <FlatList
          data={Hotelss}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Hotel
              image={item.image}
              id={item.id}
              title={item.title}
              location={item.location}
              rate={item.rate}
              price={item.price}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchResultScreen;

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