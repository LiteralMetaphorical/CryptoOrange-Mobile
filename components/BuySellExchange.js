import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import BuySell from './BuySell';
import Exchange from './Exchange';

export default function BuySellExchange() {
  const [selectedTab, setSelectedTab] = useState('Buy/Sell');

  return(
    <View style={styles.containerStyle}>
      <View style={styles.buySellHaderStyle}>
        <TouchableOpacity
          onPress={() => setSelectedTab('Buy/Sell')}
          style={{
            ...styles.tabStyle,
            backgroundColor: selectedTab === 'Buy/Sell' ? 'white' : '#F5F5F5',
            borderBottomWidth: selectedTab === 'Buy/Sell' ? 0 : 1,
          }}
        >
          <Text style={{...styles.tabLabelStyle, color: selectedTab === 'Buy/Sell' ? '#333' : '#666'}}>Buy/Sell</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('Exchange')}
          style={{
            ...styles.tabStyle,
            backgroundColor: selectedTab === 'Exchange' ? 'white' : '#F5F5F5',
            borderBottomWidth: selectedTab === 'Exchange' ? 0 : 1,
          }}
        >
          <Text style={{...styles.tabLabelStyle, color: selectedTab === 'Exchange' ? '#333' : '#666'}}>Exchange</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentStyle}>
        {selectedTab === 'Buy/Sell' ?
          <BuySell /> : <Exchange />
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 10,
    width: '95%'
  },
  buySellHaderStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tabStyle: {
    borderColor: '#DDD',
    borderWidth: 1,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6
  },
  contentStyle: {
    marginTop: -1,
    borderWidth: 1,
    borderColor: '#DDD',
    borderTopWidth: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabLabelStyle: {
    fontSize: 18
  }
});