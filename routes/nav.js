import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../src/Screens/Splash';
import HomeScreen from '../src/Screens/HomeScreen';
import ScreenNames from './screenNames';
import ProductScreen from '../src/Screens/ProductScreen';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  /**
   * each screen get 2 props from the navigator :
   * 1- navigation : contains all the navigation functions such as naigate , goBack , canGoBack
   * 2- route : contains all the route (screen) props
   */

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.splash}
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen name={ScreenNames.home} component={HomeScreen} />
        <Stack.Screen
          name={ScreenNames.ProductScreen}
          component={ProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
