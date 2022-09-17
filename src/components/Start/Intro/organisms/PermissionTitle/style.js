import styled from 'styled-components/native';

export const TitleBox = styled.View`
  width: 85%;
  height: ${props=>props.theme.windowSize.height * 0.08};
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
`;

export const ChangeDirection = styled.View`
  flex-direction: row;
  height: 50%;
`;

export const TextUnderLineContainer = styled.View`
  height: 100%;
`;
