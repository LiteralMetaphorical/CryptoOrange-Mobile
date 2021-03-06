import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {
  createMaterialTopTabNavigator
} from 'react-navigation-tabs';
import Header from '../../components/global/Header';
import MoreScreen from '../../screens/more-screens/MoreScreen';
import TestScreen1 from '../../screens/more-screens/TestScreen1';
import TestScreen2 from '../../screens/more-screens/TestScreen2';
import TestScreen3 from '../../screens/more-screens/TestScreen3';
import StackScreen from '../../screens/more-screens/StackScreen';
import StackScreen2 from '../../screens/more-screens/StackScreen2';
import { Entypo } from '@expo/vector-icons';

const MoreTabScreen = createMaterialTopTabNavigator(
  {
    "Test one": { screen: TestScreen1 },
    "Test two": { screen: TestScreen2 },
    "Test three": { screen: TestScreen3 },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      upperCaseLabel: false,
      scrollEnabled: true,
      activeTintColor: '#000',
      inactiveTintColor: 'rgb(180, 180, 180)',
      pressColor: 'orange',
      style: {
        elevation: 0,
        backgroundColor: '#fff',
        numberOfLines: 1,
      },
      labelStyle: {
        fontSize: 16,
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: 'orange',
        borderBottomWidth: 4,
      }
    }
  }
);

const MoreStack = createStackNavigator({
  MoreTabScreen: {
    screen: MoreTabScreen,
    navigationOptions: {
      header: <Header title="More" />,
    },
  },
  StackScreen: {
    screen: StackScreen,
    navigationOptions: {
      header: <Header back="true" title="Stack 1" />,
    }
  },
  StackScreen2: {
    screen: StackScreen2,
    navigationOptions: {
      header: <Header back="true" title="Stack 2" />,
    }
  }
});

// MoreStack.navigationOptions = {
//   tabBarLabel: 'More',
//   tabBarIcon: ({ focused }) => (
//     <Entypo
//       size={28}
//       name='dots-three-horizontal'
//       color={focused ? 'orange' : 'grey'}
//       focused={focused}
//     />
//   ),
//   tabBarOptions: {
//     activeTintColor: 'orange',
//   },
// };

MoreStack.path = '';

export default MoreStack;
