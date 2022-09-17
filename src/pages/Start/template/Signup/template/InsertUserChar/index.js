import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import {StyledText, RectBotBtn} from '../../../../../../components/commons/molecules';
import {InsertUserCharBody} from '../../../../../../components/Start/Signup/organisms';

function InsertUserChar(props) {
  const theme = useContext(ThemeContext);
  const inputInfoList = [
    {
      contentTitle: '닉네임',
      placeHolder: '닉네임',
      contentInfo: '사용가능한 닉네임입니다.',
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
            content={`추가 정보를\n입력해주세요 👇`}
          />
        </S.Header>
        <S.Body>
          <InsertUserCharBody
            imageTitle="프로필"
            inputInfoList={inputInfoList}
          />
        </S.Body>
      </S.Container>
      <S.Footer>
        <RectBotBtn
          bgColor={theme.palette.blue500}
          content="건너뛰기"
          onPress={() => props.navigation.navigate('CheckTerms')}
        />
      </S.Footer>
    </S.SafeAreaContainer>
  );
}

export default InsertUserChar;
