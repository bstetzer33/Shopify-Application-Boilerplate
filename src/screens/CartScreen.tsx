import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';

import { RootState } from '../store';

export default function CartScreen() {

  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (

    <View style={styles.container}>

      <Text>Cart Screen</Text>

      <Text>Items: {cartItems.length}</Text>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

  },

});