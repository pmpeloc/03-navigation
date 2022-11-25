import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Page 1 Screen</Text>
      <Button
        title="Go to Page 2"
        onPress={() => navigation.navigate('Page 2')}
      />
    </View>
  );
};
