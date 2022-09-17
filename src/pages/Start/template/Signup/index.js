import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  CheckTerms,
  InsertBusinessData,
  InsertUserChar,
  InsertUserData,
  SignupComplete,
} from './template';

const SignupStack = createStackNavigator();

export default function Signup(props) {
  const theme = useContext(ThemeContext);

  return (
    <SignupStack.Navigator
      initialRouteName="InsertUserData"
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
      <SignupStack.Screen name="InsertUserData" component={InsertUserData} />
      <SignupStack.Screen
        name="InsertBusinessData"
        component={InsertBusinessData}
      />
      <SignupStack.Screen name="InsertUserChar" component={InsertUserChar} />
      <SignupStack.Screen name="CheckTerms" component={CheckTerms} />
      <SignupStack.Screen name="SignupComplete" component={SignupComplete} />
    </SignupStack.Navigator>
  );
}
