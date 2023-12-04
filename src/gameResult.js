import React from 'react';
import Game from './game';
import WinnerPage from './winnerPage';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const GameResult = () => {
  return (
    <Stack.Navigator initialRouteName="Game">
      <Stack.Screen
        name="Game"
        component={Game}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Result" component={WinnerPage} />
    </Stack.Navigator>
  );
};

export default GameResult;
