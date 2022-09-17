import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {ThemeContext} from 'styled-components';
import {createStackNavigator} from '@react-navigation/stack';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import {InsertUserAccount} from './template';

const LoginStack = createStackNavigator();

export default function Login(props) {
  const theme = useContext(ThemeContext);
  return (
    <LoginStack.Navigator
      initialRouteName="InsertUserAccount"
      screenOptions={({navigation}) => ({
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.palette.white,
        },
        headerLeft: () => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}>
            <IconFontAwesome
              name="angle-left"
              size={33}
              color={theme.palette.black}
            />
          </TouchableOpacity>
        ),
        headerLeftContainerStyle: {
          paddingLeft: theme.windowSize.width * 0.075,
        },
        headerTitle: '',
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      })}>
      <LoginStack.Screen
        name="InsertUserAccount"
        component={InsertUserAccount}
      />
    </LoginStack.Navigator>
  );
}
