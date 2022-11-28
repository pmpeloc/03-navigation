import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { TouchableIcon } from '../components/TouchableIcon';

import { styles } from '../theme/appTheme';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab 1');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="attach-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="images-outline" />
      </Text>
    </View>
  );
};
