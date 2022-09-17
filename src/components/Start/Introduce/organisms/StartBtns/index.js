import React, {useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import {RoundBtn, StyledText} from '../../../../commons/molecules';

function StartBtns(props) {
  const theme = useContext(ThemeContext);

  return (
    <S.BtnsContainer>
      <RoundBtn
        bgColor={theme.palette.blue500}
        width={theme.windowSize.width * 0.85}
        content="시작하기"
        onPress={props.goLogin}
      />
      <StyledText
        fontWeight="500"
        fontSize="14"
        textAlign="center"
        textColor={theme.palette.gray500}
        content="or"
      />
      <TouchableOpacity activeOpacity={0.8} onPress={props.goSelectRole}>
        <StyledText
          fontWeight="500"
          fontSize="13"
          textAlign="center"
          textColor={theme.palette.black}
          content="처음으로"
        />
      </TouchableOpacity>
    </S.BtnsContainer>
  );
}

export default StartBtns;
