import React from 'react';
import { render } from '@testing-library/react-native';
import ProductItem from '../ProductItem';

const mockNavigation = { navigate: jest.fn() };

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => mockNavigation,
}));

test('renders product item', () => {
  const product = {
    id: '1',
    title: 'Test Product',
    images: { edges: [{ node: { url: 'test.jpg' } }] },
    priceRange: { minVariantPrice: { amount: '10.00' } },
  };
  const { getByText } = render(<ProductItem product={product} />);
  expect(getByText('Test Product')).toBeTruthy();
});