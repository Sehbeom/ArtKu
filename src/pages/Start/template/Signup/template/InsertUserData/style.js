import styled from 'styled-components/native';

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.palette.white};
  align-items: center;
`;

export const ScrollContainer = styled.View`
  height: 90%;
`;

export const Container = styled.View`
  width: ${props => props.theme.windowSize.width};
  align-items: center;
`;

export const Header = styled.View`
  width: ${props => props.theme.windowSize.width * 0.85};
  box-sizing: border-box;
  margin-top: 38;
  margin-bottom: 48;
`;

export const Body = styled.View`
  align-items: center;
  box-sizing: border-box;
`;

export const Footer = styled.View`
  box-sizing: border-box;
  /* justify-content: flex-end; */
  width: ${props => props.theme.windowSize.width};
  position: absolute;
  bottom: ${props => props.botMargin};
`;
