import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons/';

import Feed from './screens/Feed/index';
import Cart from './screens/Cart/index';
import Product from './screens/Product/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='App'
        tabBarOptions={{
          activeTintColor: '#AA5EFF',
          inactiveTintColor: '#999',
          showLabel: false,
        }}
      >
        <Stack.Screen name='App' component={AppNavigation} options={{
          headerShown: false
        }} />
        <Stack.Screen  name='Product' component={Product} options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#252525',
          },
          headerTintColor: '#f5f5f5'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function AppNavigation() {
  return (    
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#AA5EFF',
        inactiveTintColor: '#999',
      }}
    >
      <Tab.Screen
        name='Feed' 
        component={Feed}
        options={{ 
          tabBarLabel: 'Feed',            
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#333',
          },          
          headerTitleStyle: {
            color: '#fff',
            fontSize: 24,
          },
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='store-mall-directory' size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Cart' 
        component={Cart}
        options={{ 
          tabBarLabel: 'Shopping Cart',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#333',
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 24,
          },
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='shopping-cart' size={32} color={color} />
          ),
          
        }}
      />
    </Tab.Navigator>
  );
};