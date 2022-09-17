import {Dimensions} from 'react-native';

const theme = {
  palette: {
    red: '#FF2D54',
    mainblue: '#0049ff',

    transparent: 'transparent',

    //grayscale
    white: '#ffffff',
    gray50: '#f5f5f5', //bgGray
    gray80: '#ebebeb',
    gray100: '#dbdbdb',
    gray200: '#c2c2c2',
    gray300: '#a8a8a8',
    gray400: '#8f8f8f',
    gray500: '#757575',
    gray600: '#5c5c5c',
    gray700: '#424242',
    gray800: '#292929',
    gray900: '#111111',
    black: '#000000',

    //bluescale
    blue100: '#e5edff',
    blue200: '#99b6ff',
    blue300: '#4d80ff',

    blue500: '#0049ff',
    blue600: '#0033b3',
    blue700: '#001d66',
    blue800: '#00071a',

    //community scale
    community100: '#99CEFF',
    community300: '#99B6FF',
    community500: '#99A3FF',
    community700: '#B499FF',
    community900: '#D899FF',

    purple: '#8A61FF',
    coral: '#FB5F72',
    orange: '#F2A660',

    opacityscale: [0.9, 0.8, 0.7, 0.6, 0.5],

    // primary: '#FF2D54',
    // alert: '#ffa000',
    // success: '#388e3c',
    // white: '#ffffff',
    // black: '#212121',
  },
  windowSize: Dimensions.get('window'),

  // fontStyle: {
  //   h1: `
  //         font-size: 9.6rem;
  //         letter-spacing: -0.15rem;
  //         font-weight: 300;
  //     `,
  //   h2: `
  //         font-size: 6rem;
  //         letter-spacing: -0.05rem;
  //         font-weight: 300;
  //     `,
  // },
};

export default theme;
