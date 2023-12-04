import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Feed from './feed';
import Notifications from './notifications';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import Profile from './profile';
import GameResult from './gameResult';
import Game from './game';
import WinnerPage from './winnerPage';

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e13"
      labelStyle={{fontSize: 12}}
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <IonicIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="GameResult"
        component={GameResult}
        options={{
          tabBarLabel: 'Game',
          tabBarIcon: ({color}) => (
            <IonicIcons
              name="game-controller-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="bell-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <IonicIcons name="person-circle-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
