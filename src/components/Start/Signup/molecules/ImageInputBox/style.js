import styled from 'styled-components/native';

export const Container = styled.View`
  box-sizing: border-box;
  justify-content: space-around;
  margin-bottom: 16;
  width: ${props => props.theme.windowSize.width * 0.85};
  //border-width: 1;
`;

export const ImageContainer = styled.TouchableOpacity`
  height: 120;
  width: 120;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.palette.gray50};
  border-radius: 60;

  margin-top: 10;
`;
