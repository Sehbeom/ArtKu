import React, {useContext} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeContext } from 'styled-components';

//icon
import Icon from 'react-native-vector-icons/Ionicons';

import { Home, JobInfo, Portfolio, Chatting, MyPage } from './template';

const MainBotTab = createBottomTabNavigator();

export default function Main(props) {
  const theme = useContext(ThemeContext);
  return (
        <MainBotTab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              color = theme.palette.gray900;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'JobInfo') {
                iconName = focused ? 'podium' : 'podium-outline';
              } else if (route.name === 'Portfolio') {
                iconName = focused ? 'heart' : 'heart-outline';
              } else if (route.name === 'Chatting') {
                iconName = focused ? 'chatbox' : 'chatbox-outline';
              } else if (route.name === 'MyPage') {
                iconName = focused ? 'person' : 'person-outline';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: theme.palette.gray900,
            inactiveTintColor: theme.palette.gray900,
          }}>
          <MainBotTab.Screen
            name="Home"
            component={Home}
            options={{headerShown: false, tabBarLabel:"홈"}}
          />
          <MainBotTab.Screen
            name="JobInfo"
            component={JobInfo}
            options={{headerShown: false, tabBarLabel:"구인구직"}}
          />
          <MainBotTab.Screen
            name="Portfolio"
            component={Portfolio}
            options={{headerShown: false, tabBarLabel:"포트폴리오"}}
          />
          <MainBotTab.Screen
            name="Chatting"
            component={Chatting}
            options={{headerShown: false, tabBarLabel:"채팅"}}
          />
          <MainBotTab.Screen
            name="MyPage"
            component={MyPage}
            options={{headerShown: false, tabBarLabel:"마이페이지"}}
          />
        </MainBotTab.Navigator>
  );
};