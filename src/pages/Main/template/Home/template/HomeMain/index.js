import React, {useCallback, useState} from 'react';
import {Text, RefreshControl} from 'react-native';
import * as S from './style';

import {MainHeader} from '../../../../../../components/commons/molecules';
import {InfoList} from '../../../../../../components/Main/Home/organisms';

function HomeMain(props) {
  const [refreshing, setRefreshing] = useState(false);
  const [infoListContent, setInfoListContent] = useState([
    {
      listTitle: '급구 알바 모집',
      listContent: [
        {
          // cardImage: "image",
          cardTitle: '김나이 커리어 엑셀러레이터가 말하는 좋은 회사',
          cardHashTag: ['#회사생활', '#취업/이직', '#커리어'],
        },
        {
          // cardImage: "image",
          cardTitle: '김나이 커리어 엑셀러레이터가 말하는 좋은 회사',
          cardHashTag: ['#회사생활', '#취업/이직', '#커리어'],
        },
        {
          // cardImage: "image",
          cardTitle: '김나이 커리어 엑셀러레이터가 말하는 좋은 회사',
          cardHashTag: ['#회사생활', '#취업/이직', '#커리어'],
        },
      ],
    },
    {
      listTitle: '요즘 떠오르고 있는\n전공별 아르바이트 🎹',
      listContent: [
        {
          // cardImage: "image",
          cardTitle: '김나이 커리어 엑셀러레이터가 말하는 좋은 회사',
          cardHashTag: ['#회사생활', '#취업/이직', '#커리어'],
        },
        {
          // cardImage: "image",
          cardTitle: '김나이 커리어 엑셀러레이터가 말하는 좋은 회사',
          cardHashTag: ['#회사생활', '#취업/이직', '#커리어'],
        },
        {
          // cardImage: "image",
          cardTitle: '김나이 커리어 엑셀러레이터가 말하는 좋은 회사',
          cardHashTag: ['#회사생활', '#취업/이직', '#커리어'],
        },
      ],
    },
  ]);

  const infoListComponent = infoListContent.map(i => (
    <S.InfoListContainer>
      <InfoList infoListContent={i} />
    </S.InfoListContainer>
  ));

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <S.Container>
      <S.ScrollContainer
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <S.Header>
          <MainHeader />
        </S.Header>
        <S.Body>
          <S.AdSwiperSection>
            <Text>Advertisement Swiper</Text>
          </S.AdSwiperSection>

          <S.JobInfoSection>{infoListComponent}</S.JobInfoSection>
        </S.Body>
      </S.ScrollContainer>
    </S.Container>
  );
}

export default HomeMain;
