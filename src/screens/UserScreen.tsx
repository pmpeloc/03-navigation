import React, { useEffect, useContext } from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'User'> {}

export const UserScreen = ({ route, navigation }: Props) => {
  const { id, name } = route.params;

  const { changeUsername } = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    changeUsername(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>User: {name}</Text>
      <Text style={styles.title}>Id: {id}</Text>
    </View>
  );
};
