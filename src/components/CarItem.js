import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ScreenNames from '../../routes/screenNames';
import {useNavigation} from '@react-navigation/native';

const CarItem = props => {
  const {brand, year, km, price, color, img, hideImage} = props;
  //   const brand = props.brand;
  //   const year = props.year;
  //   const km = props.km;
  //   const price = props.price;

  const navigation = useNavigation();

  const onCardPress = () => {
    const car = {...props};
    navigation.navigate(ScreenNames.ProductScreen, {data: car});
  };

  return (
    <TouchableOpacity onPress={onCardPress}>
      <View style={styles.card}>
        <View style={styles.topContainer}>
          {!hideImage && <Image source={img} style={styles.img} />}
          <View>
            <Text style={styles.txt}>{'brand: ' + brand}</Text>
            <Text style={styles.txt}>{`year: ${year}`}</Text>
            <Text style={styles.txt}>{`km: ${km}`}</Text>
            <Text style={styles.txt}>{`price: ${price}`}</Text>
          </View>
        </View>
        <Text style={styles.firstUI}>My First UI</Text>
      </View>
    </TouchableOpacity>
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
  img: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
    marginRight: 20,
  },
});
