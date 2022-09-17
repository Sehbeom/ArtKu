import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as S from './style';

import {StyledText} from '../../../../commons/molecules';

export default function GoFindAccount(props) {
  const theme = useContext(ThemeContext);
  return (
    <S.Container>
      <S.TextContainer>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={props.findidPress}
          disabled={false}>
          <StyledText
            fontWeight="normal"
            fontSize={13}
            textAlign="left"
            content="아이디 찾기"
          />
        </TouchableOpacity>
        <StyledText
          fontWeight="normal"
          fontSize={13}
          textAlign="left"
          content="  |  "
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={props.findpwPress}
          disabled={false}>
          <StyledText
            fontWeight="normal"
            fontSize={13}
            textAlign="left"
            content="비밀번호 찾기"
          />
        </TouchableOpacity>
      </S.TextContainer>
    </S.Container>
  );
}
