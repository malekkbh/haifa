import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../src/Screens/Splash';
import HomeScreen from '../src/Screens/HomeScreen';
import ScreenNames from './screenNames';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.splash} component={Splash} />
        <Stack.Screen name={ScreenNames.home} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
