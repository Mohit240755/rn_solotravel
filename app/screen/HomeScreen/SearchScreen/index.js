import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import location from '../../../assets/images/location.png';
import color from '../../../../constant/color';
import Entypo from 'react-native-vector-icons/Entypo';
import Check from '../../../assets/images/chek.png';
import Cross from '../../../assets/images/cross.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Button from '../../auth/LoginScreen/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';

export const Cites = [
  'Mumbai',
  'Bengaluru',
  'Chennai',
  'Hyderabad',
  'Kolkata',
  'Ahmedabad',
  'Jaipur',
  'Lucknow',
  'Bhopal',
  'Patna',
  'Bhubaneswar',
  'Ranchi',
  'Raipur',
  'Thiruvananthapuram',
  'Panaji',
  'Chandigarh',
  'Shimla',
  'Dehradun',
  'Srinagar',
  'Leh',
  'Shillong',
  'Aizawl',
  'Agartala',
  'Imphal',
  'Kohima',
  'Itanagar',
  'Dispur',
  'Gangtok',
];

const SearchScreen = ({onSelect, navigation}) => {
  const [visible, setVisible] = useState(false);
  const [city, setCity] = useState(null);

  const [info, setInfo] = useState(false);
  const [guest, setGuest] = useState(2);
  const [room, setroom] = useState(1);

  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [showCheckInPicker, setShowCheckInPicker] = useState(false);
  const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);
  const navigations = useNavigation();
  const handelSelect = item => {
    setCity(item);
    if (onSelect) onSelect(item);
    setVisible(false);
  };

  const formatDate = date => {
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 20}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigations.goBack()}>
          <AntDesign name="leftcircle" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.text}>Search Hotels</Text>
      </View>

      <View style={{marginTop: 30}}>
        <Text style={{fontWeight: 500, fontSize: 20}}>Location</Text>
      </View>

      <TouchableOpacity
        style={styles.selectBox}
        onPress={() => setVisible(true)}>
        <View style={{flexDirection: 'row', gap: 8}}>
          <Image style={{width: 24, height: 24}} source={location} />
          <Text style={{fontSize: 18, fontWeight: 400}}>
            {city || 'Select city'}
          </Text>
        </View>
        <AntDesign name="down" size={24} color={color.icon} />
      </TouchableOpacity>

      <View style={styles.row}>
        <View>
          <Text style={styles.label}>Check In</Text>
          <TouchableOpacity
            style={styles.dateBox}
            onPress={() => setShowCheckInPicker(true)}>
            <Image style={{width: 24, height: 24}} source={Check} />
            <Text style={styles.dateText}>{formatDate(checkInDate)}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.label}>Check Out</Text>
          <TouchableOpacity
            style={styles.dateBox}
            onPress={() => setShowCheckOutPicker(true)}>
            <Image style={{width: 24, height: 24}} source={Cross} />
            <Text style={styles.dateText}>{formatDate(checkOutDate)}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.label}>Guests</Text>
          <TouchableOpacity
            style={styles.dateBox}
            onPress={() => setInfo(true)}>
            <MaterialIcons name="person" size={24} color={color.Primary} />
            <Text style={styles.dateText}>{guest} Guest</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.label}>Rooms</Text>
          <TouchableOpacity
            style={styles.dateBox}
            onPress={() => setInfo(true)}>
            <FontAwesome name="hotel" size={24} color={color.Primary} />
            <Text style={styles.dateText}>{room} Rooms</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginVertical: 20}}>
        <Button
          text={'Search'}
          onPress={() =>
            navigation.navigate('SearchResult',{item:{city,
              checkInDate,
              checkOutDate,
              guest,
              room,
            }  ,
            })
          }
        />
      </View>

      <Modal
        visible={visible}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
        transparent>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View style={styles.modalContainer}>
            <View style={{flexDirection: 'row', paddingVertical: 10}}>
              <Image style={{width: 30, height: 30}} source={location} />
              <Text style={styles.modalTitle}>Choose The location</Text>
            </View>
            <FlatList
              data={Cites}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => handelSelect(item)}>
                  <Text style={styles.cityItem}>{item}</Text>
                </TouchableOpacity>
              )}
              contentContainerStyle={{paddingBottom: 10, paddingHorizontal: 10}}
            />
          </View>
        </View>
      </Modal>

      <Modal
        visible={info}
        transparent
        animationType="slide"
        onRequestClose={() => setInfo(false)}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View style={styles.guestModal}>
            <View style={styles.controlRow}>
              <View style={styles.iconLabel}>
                <MaterialIcons name="person" size={24} color={color.Primary} />
                <Text style={styles.controlText}>Guests</Text>
              </View>
              <View style={styles.counter}>
                <TouchableOpacity
                  onPress={() =>
                    guest <= 1 ? setGuest(1) : setGuest(guest - 1)
                  }>
                  <Entypo
                    name="circle-with-minus"
                    size={30}
                    color={color.Primary}
                  />
                </TouchableOpacity>
                <Text style={styles.count}>{guest}</Text>
                <TouchableOpacity onPress={() => setGuest(guest + 1)}>
                  <AntDesign
                    name="pluscircle"
                    size={30}
                    color={color.Primary}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.controlRow}>
              <View style={styles.iconLabel}>
                <FontAwesome name="hotel" size={24} color={color.Primary} />
                <Text style={styles.controlText}>Rooms</Text>
              </View>
              <View style={styles.counter}>
                <TouchableOpacity
                  onPress={() => (room <= 1 ? setroom(1) : setroom(room - 1))}>
                  <Entypo
                    name="circle-with-minus"
                    size={30}
                    color={color.Primary}
                  />
                </TouchableOpacity>
                <Text style={styles.count}>{room}</Text>
                <TouchableOpacity onPress={() => setroom(room + 1)}>
                  <AntDesign
                    name="pluscircle"
                    size={30}
                    color={color.Primary}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Button text={'Done'} onPress={() => setInfo(false)} />
          </View>
        </View>
      </Modal>

      {showCheckInPicker && (
        <DateTimePicker
          value={checkInDate}
          minimumDate={new Date()}
          display="default"
          mode="date"
          onChange={(event, selectedDate) => {
            setShowCheckInPicker(false);
            if (selectedDate) setCheckInDate(selectedDate);
          }}
        />
      )}
      {showCheckOutPicker && (
        <DateTimePicker
          value={checkOutDate}
          minimumDate={checkInDate}
          display="default"
          mode="date"
          onChange={(event, selectedDate) => {
            setShowCheckOutPicker(false);
            if (selectedDate) setCheckOutDate(selectedDate);
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

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
  selectBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginTop: 15,
    padding: 10,
    borderRadius: 15,
    elevation: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
  },
  dateBox: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 160,
    height: 50,
    paddingLeft: 15,
    marginVertical: 10,
    elevation: 20,
    alignItems: 'center',
  },
  dateText: {
    fontWeight: '600',
    fontSize: 15,
  },
  modalContainer: {
    backgroundColor: 'white',
    top: '50%',
    height: '50%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
  },
  modalTitle: {
    fontSize: 22,
    color: color.Primary,
    fontWeight: '500',
    marginLeft: 10,
  },
  cityItem: {
    fontSize: 20,
    paddingVertical: 10,
  },
  guestModal: {
    backgroundColor: 'white',
    top: '70%',
    height: '30%',
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  controlRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  iconLabel: {
    flexDirection: 'row',
    gap: 10,
  },
  controlText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  counter: {
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
  },
  count: {
    fontSize: 20,
  },
});
