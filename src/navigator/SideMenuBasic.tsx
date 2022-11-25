import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const SideMenuBasic = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{ drawerType: width >= 768 ? 'permanent' : 'front' }}>
      <Drawer.Screen
        options={{ title: 'Home' }}
        name="StackNavigator"
        component={StackNavigator}
      />
      <Drawer.Screen
        options={{ title: 'Settings' }}
        name="Settings"
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
