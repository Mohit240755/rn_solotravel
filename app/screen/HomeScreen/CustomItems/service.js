import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import color from '../../../../constant/color';

const Services = ({ image, title, onPress, isActive }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.serviceBox,
            {
              backgroundColor: isActive ? color.Primary : '#fff',
            },
          ]}
        >
          <Image
            source={image}
            style={[
              styles.icon,
              { tintColor: isActive ? 'white' : color.Primary },
            ]}
          />
          <Text
            style={[
              styles.text,
              { color: isActive ? 'white' : color.text },
            ]}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 12,
    justifyContent: 'center',
  },
  serviceBox: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    elevation:4,
    paddingVertical: 8,
    alignSelf: 'flex-start',
    gap: 8,
    backgroundColor: '#f9f9f9',
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    color: color.text,
  },
});
