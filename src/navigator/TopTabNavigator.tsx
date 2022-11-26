/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ChatScreen } from '../screens/ChatScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { colors } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: { backgroundColor: colors.primary },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarIcon: ({ color }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'C1';
              break;
            case 'ContactsScreen':
              iconName = 'C2';
              break;
            case 'AlbumsScreen':
              iconName = 'C3';
              break;
          }
          return <Text style={{ color }}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ title: 'Chat' }}
      />
      <Tab.Screen
        name="ContactsScreen"
        component={ContactsScreen}
        options={{ title: 'Contacts' }}
      />
      <Tab.Screen
        name="AlbumsScreen"
        component={AlbumsScreen}
        options={{ title: 'Albums' }}
      />
    </Tab.Navigator>
  );
};
