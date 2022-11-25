import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SideMenuBasic } from './src/navigator/SideMenuBasic';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuBasic />
    </NavigationContainer>
  );
};

export default App;
