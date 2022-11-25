/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: { borderTopWidth: 0, elevation: 0 },
        tabBarLabelStyle: { fontSize: 15 },
        tabBarIcon: props => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;

            case 'Tab2Screen':
              iconName = 'T2';
              break;

            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          return <Text style={{ color: props.color }}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{ tabBarLabel: 'Tab 1' }}
      />
      <Tab.Screen
        name="Tab2Screen"
        component={Tab2Screen}
        options={{ tabBarLabel: 'Tab 2' }}
      />
      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{ tabBarLabel: 'Stack' }}
      />
    </Tab.Navigator>
  );
};
