import React, {useContext, useState} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import {StyledText} from '../../../../commons/molecules';

function InfoListCard(props) {
  const theme = useContext(ThemeContext);
  const [hashTagList, setHashTagList] = useState(props.cardHashTag);

  const cardHashTag = hashTagList.map(h => <S.HashTagText>{h}</S.HashTagText>);
  return (
    <S.CardContainer>
      <S.ImageSection>
        <StyledText
          fontWeight="bold"
          content="Image Section"
          fontSize="16px"
          textAlign="center"
        />
      </S.ImageSection>
      <S.TextSection>
        <S.CardTitleText>{props.cardTitle}</S.CardTitleText>
        <S.HashTagContainer>{cardHashTag}</S.HashTagContainer>
      </S.TextSection>
    </S.CardContainer>
  );
}

export default InfoListCard;
