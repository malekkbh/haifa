import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenNames from '../../routes/screenNames';

const Splash = props => {
  console.log('can go back? ', props.navigation.canGoBack());

  const navigateHome = () => {
    props.navigation.navigate(ScreenNames.home);
  };

  return (
    <View style={styles.conatiner}>
      <Text>Splash</Text>
      <Button title="Home" onPress={navigateHome} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: 'red',
    flex: 1,
  },
});
