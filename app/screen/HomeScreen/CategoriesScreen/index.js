import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Data} from '../../../../constant/Data';
import Items from '../CustomItems/Items';
import {useNavigation} from '@react-navigation/native';

const CategoriesScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 20}}>
      <View style={styles.header}>
        {/* <View onPress={navigation.goBack}>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </View> */}
        <TouchableOpacity
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            } else {
              navigation.navigate('Home'); // or any fallback screen
            }
          }}>
          <AntDesign name="leftcircle" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.text}>Categories</Text>
      </View>
      <FlatList
        data={Data}
        numColumns={4}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Items image={item.image} id={item.id} title={item.title} />
        )}
        ItemSeparatorComponent={() => <View style={{width: 1}} />}
        contentContainerStyle={{paddingHorizontal: 5, paddingBottom: 40}}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;

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
    position: 'absolute',
    left: 0,
    right: 0,
    paddingTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
