import React, {useContext, useState, useEffect} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import {InfoListCard} from '../../molecules';

function InfoList(props) {
  const theme = useContext(ThemeContext);
  const [infoListContent, setInfoListContent] = useState(props.infoListContent);

  const infoCardList = infoListContent.listContent.map(i => (
    <S.CardContainer>
      <InfoListCard cardTitle={i.cardTitle} cardHashTag={i.cardHashTag} />
    </S.CardContainer>
  ));
  return (
    <S.ListContainer>
      <S.TextSection>
        <S.TitleText>{infoListContent.listTitle}</S.TitleText>
        <S.MoreText>더보기</S.MoreText>
      </S.TextSection>

      <S.InfoListScroll
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingRight: theme.windowSize.width * 0.075}}>
        {infoCardList}
      </S.InfoListScroll>
    </S.ListContainer>
  );
}

export default InfoList;
