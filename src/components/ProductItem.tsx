import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductItem = ({ product }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product })}>
      <Image source={{ uri: product.images.edges[0].node.url }} style={{ width: 100, height: 100 }} />
      <Text>{product.title}</Text>
      <Text>{product.priceRange.minVariantPrice.amount}</Text>
    </TouchableOpacity>
  );
};

export default ProductItem;