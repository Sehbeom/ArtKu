import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import {
  StyledText,
  RectBotBtn,
} from '../../../../../../components/commons/molecules';
import {InsertUserDataBody} from '../../../../../../components/Start/Findid/organisms';

export default function InsertUserData({navigation}) {
  const theme = useContext(ThemeContext);
  const inputInfoList = [
    {
      contentTitle: '이름',
      placeHolder: '이름',
      contentInfo: 'info',
    },
    {
      contentTitle: '전화번호',
      placeHolder: '전화번호',
      contentWarning: 'warning',
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
            content={`아이디를\n잃어버리셨나요? 😮`}
          />
        </S.Header>
        <S.Body>
          <InsertUserDataBody inputInfoList={inputInfoList} />
        </S.Body>
      </S.Container>
      <S.Footer>
        <RectBotBtn
          bgColor={theme.palette.blue500}
          content="다음"
          onPress={() => navigation.navigate('ShowUserid')}
        />
      </S.Footer>
    </S.SafeAreaContainer>
  );
}
