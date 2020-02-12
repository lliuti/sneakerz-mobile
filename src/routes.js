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
          activeTintColor: '#222',
          inactiveTintColor: '#c5c5c5',
          // showLabel: false,
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
            tabBarIcon: ({ tintColor }) => (
              <MaterialIcons name='store-mall-directory' size={32} color='#666' />
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
            tabBarIcon: () => (
              <MaterialIcons name='shopping-cart' size={32} color='#666' />
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