import React from 'react';

import * as S from './style';

function StyledText(props) {
  return (
    <S.TextContainer>
      <S.StyledText
        fontWeight={props.fontWeight}
        fontSize={props.fontSize}
        textAlign={props.textAlign}
        textColor={props.textColor}
        textDecoration={props.textDecoration}>
        {props.content}
      </S.StyledText>
    </S.TextContainer>
  );
}

export default StyledText;
