import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PlaceDetail from '../CustomItems/placedetail';
import { useRoute } from '@react-navigation/native';

const PlaceDetailScreen = ({ navigation }) => {
  const route = useRoute();
const { item } = route.params || {}; 

  return (
    <SafeAreaView style={styles.container}>
      <PlaceDetail
  image={item.image}
  title={item.title}
  rate={item.rate}
  location={item.location}
  price={item.price}
  navigation={navigation}
/>

    </SafeAreaView>
  );
};

export default PlaceDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
