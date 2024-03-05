import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import HaifaContext from '../../store/HaifaContext';
import CarItem from '../components/CarItem';

const Cart = () => {
  const {cart} = useContext(HaifaContext);
  const renderCart = () => {
    return cart.map(car => {
      return <CarItem {...car} hideImage={false} />;
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>{renderCart()}</ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
