import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import {StyledText} from '../../../../../../components/commons/molecules';
import {
  SignupCompleteBody,
  SignupCompleteBtn,
} from '../../../../../../components/Start/Signup/organisms';

function SignupComplete(props) {
  const theme = useContext(ThemeContext);
  return (
    <S.SafeAreaContainer>
      <S.Container>
        <S.InnerContainer>
          <S.Header>
            <StyledText
              fontWeight="bold"
              fontSize="18"
              textAlign="left"
              content={`\n회원가입이 완료되었습니다!`}
            />
          </S.Header>
          <S.Body>
            <SignupCompleteBody />
          </S.Body>
        </S.InnerContainer>
        <S.Footer>
          <SignupCompleteBtn />
        </S.Footer>
      </S.Container>
    </S.SafeAreaContainer>
  );
}

export default SignupComplete;
