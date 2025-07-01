// screens/SavedScreen.js
import React from 'react';
import {FlatList, Text, View, SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import Camping from '../HomeScreen/CustomItems/camp';
import color from '../../../constant/color';

const SavedScreen = () => {
  const savedItems = useSelector(state => state.savedItems);

  return (
    <SafeAreaView style={{flex: 1, margin: 16}}>
      {savedItems.length === 0 ? (
        <Text>No saved items.</Text>
      ) : (
        <FlatList
          data={savedItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Camping
              image={item.image}
              id={item.id}
              title={item.title}
              location={item.location}
              rate={item.rate}
              price={item.price}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default SavedScreen;


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
  cardContainer: {
    marginVertical: 7,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  image: {
    width: 100,
    height: 115,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  contentWrapper: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontStyle: 'italic',
    fontSize: 16,
    fontWeight: '600',
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
    fontStyle: 'italic',
  },
  locationText: {
    color: color.icon,
    fontWeight: '500',
    fontSize: 12,
    fontStyle: 'italic',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
  },
  priceText: {
    fontWeight: '700',
    fontSize: 20,
    fontStyle: 'italic',
  },
  bookNowButton: {
    backgroundColor: color.Primary,
    color: 'white',
    width: 100,
    height: 30,
    textAlign: 'center',
    paddingVertical: 5,
    borderRadius: 15,
    overflow: 'hidden',
  },
});
