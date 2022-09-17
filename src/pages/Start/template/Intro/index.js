import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import {GetPermission, SelectRole, SelectRecruiterType} from './template';

const IntroStack = createStackNavigator();

export default function Intro(props) {
  const theme = useContext(ThemeContext);

  return (
    <IntroStack.Navigator
      initialRouteName="GetPermission"
      screenOptions={({navigation}) => ({
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.palette.white,
        },
        headerLeft: () => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.navigation.goBack()}>
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
      })}
      >
      <IntroStack.Screen
        name="GetPermission"
        component={GetPermission}
        options={{headerLeft: false}}
      />
      <IntroStack.Screen name="SelectRole" component={SelectRole} />
      <IntroStack.Screen
        name="SelectRecruiterType"
        component={SelectRecruiterType}
      />
      
    </IntroStack.Navigator>
  );
}
