import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {createStackNavigator} from '@react-navigation/stack';

import { MyPageMain } from './template';

const MyPageStack = createStackNavigator();

export default function MyPage(props) {
  const theme = useContext(ThemeContext);
  return (
    <MyPageStack.Navigator
      initialRouteName="MyPageMain"
      screenOptions={{
        headerShown: false,
      }}
      >
      <MyPageStack.Screen name="MyPageMain" component={MyPageMain} />
    </MyPageStack.Navigator>
  );
}
