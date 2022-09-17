import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${props => props.theme.palette.white};
`;

export const ScrollContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Header = styled.View``;

export const Body = styled.View`
  width: 100%;
`;

export const AdSwiperSection = styled.View`
  width: 100%;
  height: 260px;

  background-color: ${props => props.theme.palette.gray500};
  align-items: center;
  justify-content: center;
`;

export const JobInfoSection = styled.View`
  width: 100%;
`;

export const InfoListContainer = styled.View`
  margin-top: 35px;
  margin-bottom: 35px;
`;
