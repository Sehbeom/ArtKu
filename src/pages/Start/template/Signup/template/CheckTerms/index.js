import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import {StyledText, RectBotBtn} from '../../../../../../components/commons/molecules';
import {CheckTermsBody} from '../../../../../../components/Start/Signup/organisms';

function CheckTerms(props) {
  const theme = useContext(ThemeContext);
  const inputInfoList = [
    {
      allCheckTitle: '전체 동의',
    },
    {
      oneCheckTitle: '이용 약관 (필수)',
    },
    {
      oneCheckTitle: '개인정보 수집 이용 (필수)',
    },
    {
      oneCheckTitle: '만 14세 이상 확인 (필수)',
    },
    {
      oneCheckTitle: '위치 기반 서비스 이용약관 동의 (선택)',
    },
  ];

  return (
    <S.SafeAreaContainer>
      <S.Container>
        <S.Header>
          <StyledText
            fontWeight="bold"
            fontSize="18"
            textAlign="left"
            content={`서비스 이용을 위해\n약관 동의가 필요합니다 👌`}
          />
        </S.Header>
        <S.Body>
          <CheckTermsBody inputInfoList={inputInfoList} />
        </S.Body>
      </S.Container>
      <S.Footer>
        <RectBotBtn
          bgColor={theme.palette.blue500}
          content="다음"
          onPress={() => props.navigation.navigate('SignupComplete')}
        />
      </S.Footer>
    </S.SafeAreaContainer>
  );
}

export default CheckTerms;
