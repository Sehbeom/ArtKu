import React, {useContext, View} from 'react';
import {TouchableOpacity} from 'react-native';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import {StyledText} from '../../../../commons/molecules';

function GoFindpwBtn(props) {
  const theme = useContext(ThemeContext);

  return (
    <S.Container>
      <TouchableOpacity activeOpacity={0.8}>
        <S.InnerContainer>
          <S.TextContainer>
            <StyledText
              fontWeight="normal"
              fontSize={16}
              content="비밀번호 찾기"
            />
          </S.TextContainer>
          <IconFontAwesome
            name="angle-right"
            size={33}
            color={theme.palette.black}
          />
        </S.InnerContainer>
      </TouchableOpacity>
    </S.Container>
  );
}

export default GoFindpwBtn;
