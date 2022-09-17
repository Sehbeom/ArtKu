import styled from 'styled-components/native';

export const ListContainer = styled.View`
  width: ${props => props.theme.windowSize.width};
`;

export const TextSection = styled.View`
  width: 100%;
  padding-left: ${props => props.theme.windowSize.width * 0.075};
  padding-right: ${props => props.theme.windowSize.width * 0.075};
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TitleText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.palette.black};
`;

export const MoreText = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: ${props => props.theme.palette.gray500};
`;

export const InfoListScroll = styled.ScrollView`
  padding-left: ${props => props.theme.windowSize.width * 0.075};
`;

export const CardContainer = styled.View`
  margin-right: 11px;
`;
