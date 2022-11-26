import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../theme/appTheme';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab 1');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <Icon name="rocket" size={30} color="#900" />
      </Text>
    </View>
  );
};
