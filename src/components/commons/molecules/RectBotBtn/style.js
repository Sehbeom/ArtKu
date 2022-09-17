import styled from 'styled-components/native';

export const BtnContainer = styled.TouchableOpacity`
  height: 56px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
`;

export const BtnText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.palette.white};
`;
