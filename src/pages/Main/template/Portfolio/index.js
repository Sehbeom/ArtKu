import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {createStackNavigator} from '@react-navigation/stack';

import { PortfolioMain } from './template';

const PortfolioStack = createStackNavigator();

export default function Portfolio(props) {
  const theme = useContext(ThemeContext);
  return (
    <PortfolioStack.Navigator
      initialRouteName="PortfolioMain"
      screenOptions={{
        headerShown: false,
      }}
      >
      <PortfolioStack.Screen name="PortfolioMain" component={PortfolioMain} />
    </PortfolioStack.Navigator>
  );
}
