import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CarItem from '../components/CarItem';
import {Cars} from '../res/data';
import {getAllUsers} from '../res/api';
import UserItem from '../components/UserItem';

const HomeScreen = props => {
  // const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState([]);

  const users = props.route.params;

  console.log("params: " , props.route.params);

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
          id={car.id}
        />
      );
    });

    return carsComponents;
  };

  const renderUsers = () => {
    return users?.map(user => <UserItem {...user} />);
  };

  // if (loading) {
  //   return (
  //     <View style={styles.loaderContainer}>
  //       <ActivityIndicator size={'large'} />
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <ScrollView>{renderUsers()}</ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
