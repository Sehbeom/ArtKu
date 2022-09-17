import styled from 'styled-components/native';

export const RoundBox = styled.TouchableOpacity`
  width: ${props => props.theme.windowSize.width * 0.85};
  height: ${props => props.theme.windowSize.width * 0.28};
  border-radius: 6;
  box-sizing: border-box;
  box-shadow: 1px 1px 2px lightgray;
  border-width: ${props => (props.isPressed ? '2px' : '0px')};
  border-color: ${props =>
    props.isPressed ? props.theme.palette.blue500 : 'default'};

  background-color: ${props => props.theme.palette.white};
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.View`
  width: 80%;
  height: 60%;
  box-sizing: border-box;
  justify-content: space-around;
`;

export const TinyText = styled.Text`
  font-size: 12px;
`;

export const BoldText = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
