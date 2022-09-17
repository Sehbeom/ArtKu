import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import {ImgSignCongratsChar} from '../../../../../assets/images/sign';

import {StyledText, RoundBtn} from '../../../../commons/molecules';

function SignupCompleteBtn(props) {
  const theme = useContext(ThemeContext);
  return (
    <S.Container>
      <ImgSignCongratsChar
        width={178}
        height={166}
        style={{
          position: 'absolute',
          bottom: 40,
          right: 0,

          shadowColor: '#000000',
          shadowOffset: {
            width: 3,
            height: 2,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4,
        }}
      />
      <RoundBtn
        bgColor={theme.palette.blue500}
        width={theme.windowSize.width * 0.85}
        content="포트폴리오 작성하러 가기 👉"
      />
    </S.Container>
  );
}

export default SignupCompleteBtn;
