import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CarItem = props => {
  const {brand, year, km, price, color} = props;
  //   const brand = props.brand;
  //   const year = props.year;
  //   const km = props.km;
  //   const price = props.price;

  return (
    <View style={styles.card}>
      <View style={styles.topContainer}>
        <View
          style={[styles.greensqr, color && {backgroundColor: color}]}></View>
        <View>
          <Text style={styles.txt}>{'brand: ' + brand}</Text>
          <Text style={styles.txt}>{`year: ${year}`}</Text>
          <Text style={styles.txt}>{`km: ${km}`}</Text>
          <Text style={styles.txt}>{`price: ${price}`}</Text>
        </View>
      </View>
      <Text style={styles.firstUI}>My First UI</Text>
    </View>
  );
};

export default CarItem;

const styles = StyleSheet.create({
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
  txt: {
    fontSize: 22,
  },
});
