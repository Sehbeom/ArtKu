import React from 'react';
import * as S from './style'

function RoundBox(props) {

  return (
    <S.RoundBox 
    activeOpacity={0.9} 
    isPressed = {props.isPressed}
    onPress={props.onPress}>
        <S.TextContainer>
            {props.tinyText && <S.TinyText>{props.tinyText}</S.TinyText>}
            {props.boldText && <S.BoldText>{props.boldText}</S.BoldText>}
        </S.TextContainer>
        
    </S.RoundBox>
  );
}

export default RoundBox;
