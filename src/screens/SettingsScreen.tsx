import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const SettingsScreen = () => {
  const { top } = useSafeAreaInsets();

  const { authState } = useContext(AuthContext);

  return (
    <View style={{ ...styles.globalMargin, marginTop: top }}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  );
};
