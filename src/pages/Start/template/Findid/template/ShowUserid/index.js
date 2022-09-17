import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import {
  StyledText,
  RectBotBtn,
} from '../../../../../../components/commons/molecules';
import {GoFindpwBtn} from '../../../../../../components/Start/Findid/organisms';

export default function ShowUserid({navigation}) {
  const theme = useContext(ThemeContext);

  return (
    <S.SafeAreaContainer>
      <S.Container>
        <S.Header>
          <StyledText
            fontWeight="bold"
            fontSize="18"
            textAlign="left"
            content={`\n아이디를 찾았어요! 👀`}
          />
        </S.Header>
        <S.Body>
          <StyledText
            fontWeight="bold"
            fontSize="16"
            textAlign="left"
            content={`hello userid`}
          />
        </S.Body>
      </S.Container>
      <S.Footer>
        <S.BtnContainer>
          <GoFindpwBtn />
        </S.BtnContainer>

        <RectBotBtn
          bgColor={theme.palette.blue500}
          content="로그인하기"
          //onPress={() => navigation.navigate('')}
        />
      </S.Footer>
    </S.SafeAreaContainer>
  );
}
