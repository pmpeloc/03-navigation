import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { styles } from '../theme/appTheme';

export const Page2Screen = () => {
  const navigator = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text>Page 2 Screen</Text>
      <Button
        title="Go to Page 3"
        onPress={() => navigator.navigate('Page 3' as never)}
      />
    </View>
  );
};
