import styled from 'styled-components/native';

export const Container = styled.View`
  box-sizing: border-box;
  justify-content: space-around;
  margin-bottom: 16;
  width: ${props => props.theme.windowSize.width * 0.85};
  /* border-width: 1; */
`;

export const Input = styled.TextInput`
  height: 54;
  width: ${props => props.theme.windowSize.width * 0.85};
  box-sizing: border-box;
  border-width: 1;
  border-color: ${props => props.borderColor};
  background-color: ${props => props.backgroundColor};
  font-size: 16;

  margin-top: 10;
  border-radius: 4;
  padding-left: 24;
  padding-right: 24;
`;
