import styled from 'styled-components/native';

export const CardContainer = styled.View`
  width: 242px;
  height: 214px;
  box-sizing: border-box;
`;

export const ImageSection = styled.View`
  width: 100%;
  height: 136px;

  border-radius: 3px;

  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.palette.gray300};
`;

export const TextSection = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 58px;
  justify-content: space-between;
`;

export const CardTitleText = styled.Text`
  font-weight: 600;
  font-size: 15px;
`;

export const HashTagContainer = styled.View`
  flex-direction: row;
`;

export const HashTagText = styled.Text`
  font-weight: 500;
  font-size: 13px;
  margin-right: 5px;
  color: ${props => props.theme.palette.gray500};
`;
