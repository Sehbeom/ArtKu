import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as S from './style';

import {StyledText} from '../../../../commons/molecules';

export default function GoSignup(props) {
  const theme = useContext(ThemeContext);
  return (
    <S.Container>
      <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
        <StyledText
          fontWeight="normal"
          fontSize={16}
          content="회원이 아니시라구요?"
        />
      </TouchableOpacity>
    </S.Container>
  );
}
