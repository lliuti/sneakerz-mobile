import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons/';

import Feed from './pages/Feed/index';
import Cart from './pages/Cart/index';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#AA5EFF',
          inactiveTintColor: '#999',
          showLabel: false,
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
    </NavigationContainer>
  )
};

// const Routes = NavigationContainer(
//   createStackNavigator({
//     Feed
//   }),
// );