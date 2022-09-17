import React from 'react';
import * as S from './style'

import { StyledText } from '../../../../commons/molecules';

function IntroSwiperCard(props) {
  return (
    <S.CardContainer>
      <S.CardImageContainer>
        {props.cardImage}
      </S.CardImageContainer>

      <S.CardTextContainer>
        <StyledText fontWeight="bold" content={props.cardText} fontSize="16px" textAlign="center"/>
      </S.CardTextContainer>

    </S.CardContainer>
  );
}

export default IntroSwiperCard;
