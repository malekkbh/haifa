import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ScreenNames from '../../routes/screenNames';
import {getAllUsers} from '../res/api';

const Splash = props => {
  console.log('can go back? ', props.navigation.canGoBack());

  const navigateHome = data => {
    setTimeout(() => {
      props.navigation.replace(ScreenNames.home, data);
    }, 2 * 1000);
  };

  const getAllUsersFromApi = () => {
    // setLoading(true);
    getAllUsers().then(res => {
      // setLoading(false);
      // setUsers(res);
      navigateHome(res);
      console.log('users: ', res);
    });
  };

  useEffect(() => {
    // listen to component did mount event
    getAllUsersFromApi();
  }, []);

  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>Haifa</Text>
      <Text style={styles.loading}> Loading...</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
  },
   loading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
