import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './pages/Feed/index';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Feed' 
          component={Feed}
          options={{ 
            title: 'sneakerz',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#333',
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 24,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

// const Routes = NavigationContainer(
//   createStackNavigator({
//     Feed
//   }),
// );