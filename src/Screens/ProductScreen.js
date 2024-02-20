import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CarItem from '../components/CarItem';

const ProductScreen = props => {
  const car = props.route.params.data;
  console.log('car: ', car);
  return (
    <View style={styles.container}>
      <Image source={car.img} style={styles.img} />
      <Text style={styles.title}>{`${car.brand} ${car.year}`}</Text>
      <CarItem {...car} hideImage={true} />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: 320,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 45,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 15,
  },
});
