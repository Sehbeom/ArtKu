import styled from 'styled-components/native';

// export const Container = styled.View`
//   //justify-content: space-around;
//   justify-content: center;
// `;

export const Container = styled.View`
  width: ${props => props.theme.windowSize.width * 0.85};
  justify-content: flex-end;
  flex-direction: row;
`;

export const InnerContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextContainer = styled.View`
  margin-right: 16;
`;
