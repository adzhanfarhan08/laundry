import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  Home,
  HomeActive,
  Pesanan,
  PesananActive,
  Akun,
  AkunActive,
} from '../../assets';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={{flex: 1}}>
      <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({});
