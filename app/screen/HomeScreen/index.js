import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import Hom from '../../assets/images/homeimg.png';
import Hom1 from '../../assets/images/homeimg1.png';
import Hom2 from '../../assets/images/homeimg2.png';
import Logo from '../../assets/images/logo1.png';
import Ic from '../../assets/images/icon.png';

import color from '../../../constant/color';

import Items from './CustomItems/Items';
import {Camp, Camps, Data, Event, Service, Visit} from '../../../constant/Data';
import Vieww from './CustomItems/view';
import Services from './CustomItems/service';
import Events from './CustomItems/events';
import Camping from './CustomItems/camp';
import { addItem } from '../../ReduxToolkit/Saveitem';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [color, setColor] = useState(null);
  const dispatch = useDispatch();
 const addedItems = useSelector(state => state.savedItems);

const handleAddItem = (item) => {
  dispatch(addItem(item));
  setColor(item.id);
};
  

  return (
    <FlatList
      data={[1]}
      renderItem={() => (
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Image source={Hom} style={styles.backgroundImage} />

            <View style={styles.overlay}>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <Image source={Hom2} style={styles.icon} />
                </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image source={Hom1} style={styles.icon} />
                </TouchableOpacity>
              </View>
              <Image source={Logo} style={styles.logo} />
              <TouchableOpacity style={styles.searchContainer} onPress={() => navigation.navigate('Search')}>
                <Image source={Ic} style={styles.searchIcon} />
                <Text style={styles.searchInput} >Search Any Place....</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Categories</Text>
              <Text
                style={styles.seeAll}
                onPress={() => navigation.navigate('Categeries')}>
                See All...
              </Text>
            </View>
            <FlatList
              data={Data}
              horizontal
              keyExtractor={item => item.id.toString()}
            renderItem={({item}) => ( 
                <Items image={item.image} id={item.id} title={item.title} />
              )}
              ItemSeparatorComponent={() => <View style={{width: 15}} />}
              contentContainerStyle={{
                paddingHorizontal: 5,
                marginHorizontal: 10,
              }}
              showsHorizontalScrollIndicator={false}
            />
            <View style={styles.sectionHeader1}>
              <Text style={styles.sectionTitle}>Most Visited</Text>
              <Text
                style={styles.seeAll}
                onPress={() => navigation.navigate('Visit')}>
                See All...
              </Text>
            </View>
            <FlatList
              data={Visit}
              horizontal
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <Vieww
                  image={item.image}
                  id={item.id}
                  title={item.title}
                  location={item.location}
                  rate={item.rate}
                />
              )}
              ItemSeparatorComponent={() => <View style={{width: 8}} />}
              contentContainerStyle={{paddingHorizontal: 10}}
              showsHorizontalScrollIndicator={false}
            />
            <View style={styles.sectionHeader2}>
              <Text style={styles.sectionTitle}>Services</Text>
              <Text style={styles.seeAll}>See All...</Text>
            </View>
            <FlatList
              data={Service}
              horizontal
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <Services
                  image={item.image}
                  id={item.id}
                  title={item.title}
                  isActive={selectedId === item.id}
                  onPress={() => setSelectedId(item.id)}
                />
              )}
              ItemSeparatorComponent={() => <View style={{width: 5}} />}
              contentContainerStyle={{paddingHorizontal: 5}}
              showsHorizontalScrollIndicator={false}
            />
            <View style={styles.sectionHeader2}>
              <Text style={styles.sectionTitle}>Top Events</Text>
              <Text style={styles.seeAll}>See All...</Text>
            </View>
            <FlatList
              data={Event}
              horizontal
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <Events
                  image={item.image}
                  id={item.id}
                  title={item.title}
                  location={item.location}
                />
              )}
              ItemSeparatorComponent={() => <View style={{width: 8}} />}
              contentContainerStyle={{paddingHorizontal: 10}}
              showsHorizontalScrollIndicator={false}
            />
            <View style={styles.sectionHeader2}>
              <Text style={styles.sectionTitle}>Camping Site</Text>
              <Text style={styles.seeAll}>See All...</Text>
            </View>
            <FlatList
              data={Camps}
              horizontal
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <Camping
                  image={item.image}
                  id={item.id}
                  title={item.title}
                  location={item.location}
                  isActive={color === item.id}
                  onPress={() => handleAddItem(item)}
                />
              )}
              ItemSeparatorComponent={() => <View style={{width: 8}} />}
              contentContainerStyle={{paddingHorizontal: 10}}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </SafeAreaView>
      )}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: 210,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  icon: {
    width: 44,
    height: 44,
    resizeMode: 'contain',
  },
  logo: {
    alignSelf: 'center',
    width: 220,
    height: 53,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
    resizeMode: 'contain',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color:color.text,
    
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginHorizontal: 16,
  },
  sectionHeader2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 15,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  sectionHeader1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  seeAll: {
    fontSize: 15,

    fontWeight: 'bold',
    color: color.Primary,
  },
});
