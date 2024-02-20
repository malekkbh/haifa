import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CarItem from '../components/CarItem';
import {Cars} from '../res/data';

const HomeScreen = () => {
  const renderCars = () => {
    const carsComponents = Cars.map(car => {
      return (
        <CarItem
          brand={car.brand}
          year={car.year}
          price={car.price}
          km={car.km}
          color={car.color}
          img={car.img}
        />
      );
    });

    return carsComponents;
  };

  return (
    <View style={styles.container}>
      <ScrollView>{renderCars()}</ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
