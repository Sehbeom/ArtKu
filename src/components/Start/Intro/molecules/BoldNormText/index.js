import React from 'react';
import * as S from './style'

function BoldNormText(props) {
  return (
    <S.TextContainer>
        <S.BoldText>{props.boldText}</S.BoldText>
        <S.NormalText>{props.normalText}</S.NormalText>
    </S.TextContainer>
  );
}

export default BoldNormText;
