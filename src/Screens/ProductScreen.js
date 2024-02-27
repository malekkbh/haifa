import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CarItem from '../components/CarItem';

const ProductScreen = props => {
  const car = props.route.params.data;

  const [amount, setAmount] = useState(0);

  /**
   *  const state = useState(0)
   * const amount = state[0]
   * const setAmount = state[1]
   */

  var x = 0;

  const onAddPress = () => {
    setAmount(amount + 1);
  };

  const onRmovePress = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    } else {
      Alert.alert('0 is the min');
    }
  };

  console.log('car: ', car);
  return (
    <View style={styles.container}>
      <Image source={car.img} style={styles.img} />
      <Text style={styles.title}>{`${car.brand} ${car.year}`}</Text>
      <CarItem {...car} hideImage={true} />

      <View style={styles.amountContainer}>
        <TouchableOpacity onPress={onAddPress}>
          <Text style={styles.txt}>+</Text>
        </TouchableOpacity>

        <Text style={styles.txt}>{amount}</Text>

        <TouchableOpacity onPress={onRmovePress}>
          <Text style={styles.txt}>-</Text>
        </TouchableOpacity>
      </View>
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
  txt: {
    fontSize: 30,
    textAlign: 'center',
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    alignSelf: 'center',
  },
});
