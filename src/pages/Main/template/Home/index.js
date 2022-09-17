import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {createStackNavigator} from '@react-navigation/stack';

import { HomeMain } from './template';

const HomeStack = createStackNavigator();

export default function Home(props) {
  const theme = useContext(ThemeContext);
  return (
    <HomeStack.Navigator
      initialRouteName="HomeMain"
      screenOptions={{
        headerShown: false,
      }}
      >
      <HomeStack.Screen name="HomeMain" component={HomeMain} />
    </HomeStack.Navigator>
  );
}
