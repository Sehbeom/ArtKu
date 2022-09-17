import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${props=>props.theme.palette.white};
`;

export const Header = styled.View`
  width: 100%;
  margin-top: 20%;
  align-items: center;
  box-sizing: border-box;
`;

export const TitleBox = styled.View`
  width: 85%;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
`;

export const Body = styled.View`
  margin-top: 20%;
  height: 35%;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Footer = styled.View`
  justify-content: flex-end;
  height: 10%;
  bottom: 0;
`;
