import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import color from '../../../../constant/color';

const Hotel = ({image,title,rate,location,price}) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={image} />
      <View style={styles.contentWrapper}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{title}</Text>
          <View style={{paddingRight: 10}}>
            <FontAwesome6 name="bookmark" size={20} color="black" />
          </View>
        </View>

        <View style={styles.iconTextRow}>
          <FontAwesome name="star" size={18} color={color.Primary} />
          <Text style={styles.ratingText}>{rate}</Text>
        </View>

        <View style={styles.iconTextRow}>
          <FontAwesome6 name="location-dot" size={13} color={color.icon} />
          <Text style={styles.locationText}>{location}</Text>
        </View>

        <View style={styles.footerRow}>
            <View style={{flexDirection:'row'}}>
          <Text style={styles.priceText}>{price}</Text>
          <Text style={{fontSize:18,
    fontStyle: 'italic',color:color.icon}}>/Room/Night</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.bookNowButton}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Hotel;

const styles = StyleSheet.create({
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
