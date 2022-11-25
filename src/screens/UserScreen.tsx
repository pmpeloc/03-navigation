import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'User'> {}

export const UserScreen = ({ route, navigation }: Props) => {
  const { id, name } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>User: {name}</Text>
      <Text style={styles.title}>Id: {id}</Text>
    </View>
  );
};
