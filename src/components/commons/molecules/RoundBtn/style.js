import styled from 'styled-components/native';

export const BtnContainer = styled.TouchableOpacity`
  height: 54px;
  width: ${props => props.width};
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
  border-radius: 40px;
`;

export const BtnText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.palette.white};
`;
