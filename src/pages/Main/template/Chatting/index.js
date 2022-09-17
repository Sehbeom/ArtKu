import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {createStackNavigator} from '@react-navigation/stack';

import { ChattingMain } from './template';

const ChattingStack = createStackNavigator();

export default function Chatting(props) {
  const theme = useContext(ThemeContext);
  return (
    <ChattingStack.Navigator
      initialRouteName="ChattingMain"
      screenOptions={{
        headerShown: false,
      }}
      >
      <ChattingStack.Screen name="ChattingMain" component={ChattingMain} />
    </ChattingStack.Navigator>
  );
}
