import React from 'react';
import { Image, useWindowDimensions, View } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{ drawerType: width >= 768 ? 'permanent' : 'front' }}
      drawerContent={props => <MenuContent {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png',
          }}
          style={styles.avatar}
        />
      </View>
    </DrawerContentScrollView>
  );
};
