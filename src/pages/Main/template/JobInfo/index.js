import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {createStackNavigator} from '@react-navigation/stack';

import { JobInfoMain } from './template';

const JobInfoStack = createStackNavigator();

export default function JobInfo(props) {
  const theme = useContext(ThemeContext);
  return (
    <JobInfoStack.Navigator
      initialRouteName="JobInfoMain"
      screenOptions={{
        headerShown: false,
      }}
      >
      <JobInfoStack.Screen name="JobInfoMain" component={JobInfoMain} />
    </JobInfoStack.Navigator>
  );
}
