import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {createStackNavigator} from '@react-navigation/stack';

import {Intro, Introduce, Login, Signup, Findid} from './template';

const StartStack = createStackNavigator();

export default function Start(props) {
  const theme = useContext(ThemeContext);
  return (
    <StartStack.Navigator
      initialRouteName="Intro"
      screenOptions={{
        headerShown: false,
      }}>
      <StartStack.Screen name="Intro" component={Intro} />
      <StartStack.Screen name="Introduce" component={Introduce} />
      <StartStack.Screen name="Login" component={Login} />
      <StartStack.Screen name="Signup" component={Signup} />
      <StartStack.Screen name="Findid" component={Findid} />
    </StartStack.Navigator>
  );
}
