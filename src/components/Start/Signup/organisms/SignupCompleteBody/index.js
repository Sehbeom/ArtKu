import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import {BgSignUnderline} from '../../../../../assets/images/sign';

import {StyledText} from '../../../../commons/molecules';

function SignupCompleteBody(props) {
  const theme = useContext(ThemeContext);
  return (
    <S.Container>
      <StyledText
        fontWeight="normal"
        fontSize="16"
        textColor={theme.palette.gray700}
        content={`앗쿠의 회원이 되신 걸 축하드립니다! 🎉\n회원님을 알리기 위한`}
      />
      <S.ChangeDirection>
        <S.TextUnderLineContainer>
          <BgSignUnderline
            width={'100%'}
            height={'50%'}
            style={{
              position: 'absolute',
              top: 10,
            }}
          />
          <StyledText
            fontWeight="normal"
            content="포트폴리오"
            textColor={theme.palette.gray700}
            fontSize="16"
          />
        </S.TextUnderLineContainer>
        <StyledText
          fontWeight="normal"
          fontSize="16"
          textColor={theme.palette.gray700}
          content={`를 작성해주세요!`}
        />
      </S.ChangeDirection>
    </S.Container>
  );
}

export default SignupCompleteBody;
