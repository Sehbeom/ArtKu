import React from 'react';
import * as S from './style';

import theme from '../../styles/themes/default.js';
import {StyledText} from '../';

function TextInputBox(props) {
  const [text, setText] = React.useState(null);
  const [focus, setFocus] = React.useState(false);

  return (
    <S.Container>
      {props.contentTitle && (
        <StyledText
          fontWeight="bold"
          fontSize="12"
          textAlign="left"
          content={props.contentTitle}
        />
      )}

      <S.Input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChangeText={input => setText(input)}
        value={text}
        autoCapitalize="none"
        placeholderTextColor={theme.palette.gray300}
        placeholder={props.placeHolder}
        borderColor={focus ? theme.palette.blue500 : props.borderColor}
        backgroundColor={
          focus ? theme.palette.white : props.backgroundColor
        }></S.Input>

      {props.contentInfo && (
        <StyledText
          fontWeight="normal"
          fontSize="12"
          textAlign="left"
          textColor={theme.palette.blue500}
          content={props.contentInfo}
        />
      )}
      {props.contentWarning && (
        <StyledText
          fontWeight="normal"
          fontSize="12"
          textAlign="left"
          textColor={theme.palette.red}
          content={props.contentWarning}
        />
      )}
    </S.Container>
  );
}

export default TextInputBox;
