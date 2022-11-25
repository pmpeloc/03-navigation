/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1 Screen</Text>
      <Button
        title="Go to Page 2"
        onPress={() => navigation.navigate('Page2')}
      />
      <Text>Navigation with arguments</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ ...styles.bigButton, backgroundColor: '#5856d6' }}
          onPress={() =>
            navigation.navigate('User', { id: 1, name: 'Pablo Misael Peloc' })
          }>
          <Text style={styles.bigButtonText}>Misael</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.bigButton, backgroundColor: '#ff9427' }}
          onPress={() =>
            navigation.navigate('User', { id: 2, name: 'Maria Antonieta' })
          }>
          <Text style={styles.bigButtonText}>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
