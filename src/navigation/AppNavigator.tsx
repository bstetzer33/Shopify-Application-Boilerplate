import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';

import ProductDetailScreen from '../screens/ProductDetailScreen';

import CartScreen from '../screens/CartScreen';

import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function HomeStack() {

  return (

    <Stack.Navigator>

      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />

    </Stack.Navigator>

  );

}

function CartStack() {

  return (

    <Stack.Navigator>

      <Stack.Screen name="Cart" component={CartScreen} />

    </Stack.Navigator>

  );

}

function ProfileStack() {

  return (

    <Stack.Navigator>

      <Stack.Screen name="Profile" component={ProfileScreen} />

    </Stack.Navigator>

  );

}

export default function AppNavigator() {

  return (

    <NavigationContainer>

      <Tab.Navigator>

        <Tab.Screen name="HomeTab" component={HomeStack} />

        <Tab.Screen name="CartTab" component={CartStack} />

        <Tab.Screen name="ProfileTab" component={ProfileStack} />

      </Tab.Navigator>

    </NavigationContainer>

  );

}