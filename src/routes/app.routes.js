import React from 'react';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Start, Main} from '../pages';

const RootStack = createStackNavigator();

const RootRoutes = () => {
  return (
    <NavigationContainer independent={true}>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Main">
        <RootStack.Screen name="Start" component={Start} />
        <RootStack.Screen name="Main" component={Main} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootRoutes;
