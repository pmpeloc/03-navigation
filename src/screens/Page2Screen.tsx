import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { styles } from '../theme/appTheme';

export const Page2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      headerBackTitle: 'Back',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 2 Screen</Text>
      <Button
        title="Go to Page 3"
        onPress={() => navigator.navigate('Page3' as never)}
      />
    </View>
  );
};
