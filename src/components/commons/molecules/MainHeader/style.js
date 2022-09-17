import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  height: 68px;
  width: ${props => props.theme.windowSize.width};

  align-items: center;
  background-color: ${props => props.theme.palette.white};
`;

export const InnerContainer = styled.View`
  width: 85%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.View`
  width: 26px;
  height: 32px;
`;

export const IconsContainer = styled.View`
  width: 106px;
  height: 20px;

  justify-content: space-between;

  flex-direction: row;
`;
