import React, {useState} from 'react';
import HaifaContext from './HaifaContext';

const HaifaProvider = props => {
  const [cart, setCart] = useState([]);

  const providerValue = {
    cart,
    setCart,
  };

  return (
    <HaifaContext.Provider value={providerValue}>
      {props.children}
    </HaifaContext.Provider>
  );
};

export default HaifaProvider;
