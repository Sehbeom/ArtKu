import React from 'react';
import * as S from './style';

function RoundBtn(props) {
  return (
    <S.BtnContainer
      bgColor={props.bgColor}
      width={props.width}
      activeOpacity={0.8}
      onPress={props.onPress}>
      <S.BtnText>{props.content}</S.BtnText>
    </S.BtnContainer>
  );
}

export default RoundBtn;
