import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CarItem from './src/components/CarItem';
import {Cars} from './src/res/data';
import MainNavigation from './routes/nav';
import HaifaProvider from './store/HaifaProvider';

const App = () => {
  return (
    <View style={styles.container}>
      <HaifaProvider>
        <MainNavigation />
      </HaifaProvider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    borderWidth: 1,
    padding: 20,
    marginTop: 10,
  },
  greensqr: {
    backgroundColor: 'green',
    height: 50,
    width: 50,
    marginRight: 20,
  },
  topContainer: {
    flexDirection: 'row',
  },
  firstUI: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
