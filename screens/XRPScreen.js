import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import CryptoInfo from '../components/CryptoInfo';

export default function XRPScreen({navigation}) {

  const toggleSwipe = (condition) => {
    navigation.setParams({
      swipeDisabled: condition
    });
  }

  return(
    <>
      <CryptoInfo disableScroll={!navigation.state.params?.swipeDisabled ? true : false} toggleSwipe={toggleSwipe} pair="XRP/USD" />
    </>
  );
}

XRPScreen.navigationOptions = ({navigation}) => {
  return {
    swipeEnabled: navigation.state.params?.swipeDisabled
  }
}
