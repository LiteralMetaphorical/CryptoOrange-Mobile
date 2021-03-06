import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StackActions, NavigationActions } from 'react-navigation';
import CustomIcon from '../../components/global/CustomIcons';

export default function BalancesScreen({navigation}) {
  const [allowPush, setAllowPush] = useState(true);

  const navigateToDetails = (currency, amount) => {
    if (allowPush) {
      const pushAction = StackActions.push({
        routeName: 'BalanceDetailsScreen',
        params: {
          currency: currency,
          fullName: fullCurrNames[currency],
          amount: amount
        }
      });
      navigation.dispatch(pushAction);
      setAllowPush(false);
    }
    setTimeout(() => {
      setAllowPush(true);
    }, 1000);
  }

  const fullCurrNames = {
    BTC: 'Bitcoin',
    ETH: 'Ethereum',
    LTC: 'Litecoin',
    XRP: 'Ripple',
    DASH: 'Dash',
    BCH: 'Bitcoin Cash',
    ETC: 'Ethereum Classic',
    EURC: 'EUR Crypto',
    USDC: 'USD Crypto',
    ROX: 'Robotina',
    FAU: 'Faucet',
    USD: 'US Dollar',
    EUR: 'Euro',
    ZEC: 'Zcash',
    XMR: 'Monero',
    BCH: 'Bitcoin Cash'
  }

  const BTC = require('../../assets/images/BTC.png');
  const ETH = require('../../assets/images/ETH.png');
  const LTC = require('../../assets/images/LTC.png');
  const DASH = require('../../assets/images/DASH.png');
  const XRP = require('../../assets/images/XRP.png');
  const ZEC = require('../../assets/images/ZEC.png');
  const XMR = require('../../assets/images/XMR.png');
  const BCH = require('../../assets/images/BCH.png');
  const USD = require('../../assets/images/USD.png');
  const EUR = require('../../assets/images/EUR.png');

  const cryptoCurrencies = [['BTC', 0.72536822], ['ETH', 2.55278498], ['LTC', 4.22561829], ['XRP', 26.84193622], ['DASH', 5.12357616], ['ZEC', 4.19436828], ['XMR', 6.62537181], ['BCH', 2.33667002]];
  const fiatCurrencies = [['EUR', 1245.00], ['USD', 2225.50]];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.tableStyle}>
        <View style={styles.tableHeaderStyle}>
          <Text style={{fontSize: 16}}>Crypto Currencies</Text>
        </View>
        {cryptoCurrencies.map((item, index) => {
          return(
            <TouchableOpacity
              onPress={() => navigateToDetails(item[0], item[1])}
              style={{...styles.tableItemStyle, backgroundColor: index%2 !== 0 && '#EEEEEE'}}
              key={item[0]}
            >
              <View style={styles.currencyInfoStyle}>
                {/*<CustomIcon color='orange' name={item} size={32} style={styles.iconStyle} />*/}
                <Image style={styles.iconStyle} source={eval(item[0])} />
                <View>
                  <Text style={styles.tableTextStyle}>{fullCurrNames[item[0]]}</Text>
                  <Text>{item[0]}</Text>
                </View>
              </View>
              <View style={styles.priceWrapperStyle}>
                <Text style={styles.tableTextStyle}>{item[1].toFixed(8)}</Text>
                <AntDesign name='right' size={16} />
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
      <View style={styles.tableStyle}>
        <View style={styles.tableHeaderStyle}>
          <Text style={{fontSize: 16}}>Fiat Currencies</Text>
        </View>
        {fiatCurrencies.map((item, index) => {
          return(
            <TouchableOpacity onPress={() => navigateToDetails(item[0], item[1])} style={{...styles.tableItemStyle, backgroundColor: index%2 !== 0 && '#EEE'}} key={item}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {/*<CustomIcon style={styles.iconStyle} name={item} size={32} color='orange' />*/}
                <Image style={styles.iconStyle} source={eval(item[0])} />
                <View>
                  <Text style={styles.tableTextStyle}>{fullCurrNames[item[0]]}</Text>
                  <Text>{item[0]}</Text>
                </View>
              </View>
              <View style={styles.priceWrapperStyle}>
                <Text style={styles.tableTextStyle}>{item[1].toFixed(2)}</Text>
                <AntDesign name='right' size={20} />
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  tableStyle: {
    marginBottom: 20,
    width: '98%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'orange',
    overflow: 'hidden'
  },
  tableHeaderStyle: {
    backgroundColor: '#EEEEEE',
    paddingLeft: 8,
    height: 30,
    justifyContent: 'center'
  },
  tableItemStyle: {
    // borderTopWidth: 1,
    // borderTopColor: 'orange',
    paddingLeft: 8,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  tableTextStyle: {
    fontSize: 22
  },
  priceWrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconStyle: {
    height: 36,
    width: 36,
    marginRight: 5
  },
  currencyInfoStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
