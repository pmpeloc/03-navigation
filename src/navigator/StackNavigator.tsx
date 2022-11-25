import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Page1Screen } from '../screens/Page1Screen';
import { Page2Screen } from '../screens/Page2Screen';
import { Page3Screen } from '../screens/Page3Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page 1" component={Page1Screen} />
      <Stack.Screen name="Page 2" component={Page2Screen} />
      <Stack.Screen name="Page 3" component={Page3Screen} />
    </Stack.Navigator>
  );
};
