import React from 'react';
import {ThemeProvider} from 'styled-components';

import theme from './src/components/commons/styles/themes/default';

import SplashScreen from 'react-native-splash-screen';

import Routes from './src/routes/index';

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
