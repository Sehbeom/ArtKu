import styled from 'styled-components/native';

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.palette.white};
  align-items: center;
`;

export const Container = styled.View`
  width: ${props => props.theme.windowSize.width};
  height: 90%;
  align-items: center;
`;

export const Header = styled.View`
  width: ${props => props.theme.windowSize.width * 0.85};
  box-sizing: border-box;
  margin-top: 38;
  margin-bottom: 48;
`;

export const Body = styled.View`
  width: 85%;
  align-items: flex-start;
  box-sizing: border-box;
`;

export const Footer = styled.View`
  box-sizing: border-box;
  justify-content: flex-end;
  height: 10%;
  width: ${props => props.theme.windowSize.width};
  bottom: 0;
`;

export const BtnContainer = styled.View`
  margin-left: ${props => props.theme.windowSize.width * 0.075};
  margin-right: ${props => props.theme.windowSize.width * 0.075};
  width: ${props => props.theme.windowSize.width * 0.85};
  align-items: center;
  margin-bottom: 24;
`;
