import styled from 'styled-components/native';

export const TextContainer = styled.View`
  box-sizing: border-box;
`;

export const StyledText = styled.Text`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.textColor};

  line-height: 25;
  letter-spacing: 1;

  text-decoration: ${props => props.textDecoration};
  text-align: ${props => props.textAlign};
`;
