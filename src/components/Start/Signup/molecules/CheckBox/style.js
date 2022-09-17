import styled from 'styled-components/native';

export const Container = styled.View`
  box-sizing: border-box;
  justify-content: space-around;
  margin-bottom: 22;
  //border-width: 1;
`;

export const CheckBoxContainer = styled.View`
  box-sizing: border-box;
  // justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: ${props => props.theme.windowSize.width * 0.85};
  // border-width: 1;
  transition: 0.35s linear;
`;

export const AllCheckBoxMargin = styled.View`
  margin-bottom: 9;
`;
