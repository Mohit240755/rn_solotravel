import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import color from '../../../../constant/color';

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.Primary,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    margin: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
