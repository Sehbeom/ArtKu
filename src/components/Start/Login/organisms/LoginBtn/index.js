import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import {RoundBtn} from '../../../../commons/molecules';
import {GoSignup, SocialLoginList} from '../../molecules';

function LoginBtn(props) {
  const theme = useContext(ThemeContext);
  return (
    <S.Container>
      <RoundBtn
        bgColor={theme.palette.blue500}
        width={theme.windowSize.width * 0.85}
        content="로그인하기"
        onPress={props.loginCallBack}
      />
      <S.TextConatainer>
        <GoSignup onPress={props.goSignup}/>
      </S.TextConatainer>
      <S.SocialLoginContainer>
        <SocialLoginList />
      </S.SocialLoginContainer>
    </S.Container>
  );
}

export default LoginBtn;
