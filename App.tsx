import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CarItem from './src/components/CarItem';
import {Cars} from './src/res/data';
import MainNavigation from './routes/nav';

const App = () => {
  const renderCars = () => {
    const carsComponents = Cars.map(car => {
      return (
        <CarItem
          brand={car.brand}
          year={car.year}
          price={car.price}
          km={car.km}
          color={car.color}
        />
      );
    });

    return carsComponents;
  };

  return (
    <View style={styles.container}>
      <MainNavigation />
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
