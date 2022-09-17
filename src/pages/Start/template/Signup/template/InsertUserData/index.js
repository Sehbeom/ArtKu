import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import * as S from './style';

import {
  StyledText,
  RectBotBtn,
} from '../../../../../../components/commons/molecules';
import {InsertUserDataBody} from '../../../../../../components/Start/Signup/organisms';

function InsertUserData(props) {
  const theme = useContext(ThemeContext);
  const insets = useSafeAreaInsets();
  const inputInfoList = [
    {
      contentTitle: '아이디',
      placeHolder: '아이디',
      contentInfo: '사용가능한 아이디입니다.',
    },
    {
      contentTitle: '비밀번호',
      placeHolder: '비밀번호',
      contentWarning: '❗️비밀번호가 없습니다.',
    },
    {
      contentTitle: '비밀번호 확인',
      placeHolder: '비밀번호 확인',
      contentInfo: '❗️비밀번호가 일치하지 않습니다.',
    },
    {
      contentTitle: '이름',
      placeHolder: '이름',
      contentInfo: '❗️이름을 적어주세요.',
    },
    {
      contentTitle: '이름',
      placeHolder: '이름',
      contentInfo: '❗️이름을 망.',
    },
    {
      contentTitle: '이름',
      placeHolder: '이름',
      contentInfo: '❗️이름을 망.',
    },
    {
      contentTitle: '이름',
      placeHolder: '이름',
      contentInfo: '❗️이름을 망.',
    },
  ];

  return (
    <S.SafeAreaContainer>
      <S.ScrollContainer>
        <ScrollView>
          <S.Container>
            <S.Header>
              <StyledText
                fontWeight="bold"
                fontSize="18"
                textAlign="left"
                content={`앗쿠에\n오신 것을 환영합니다 👏`}
              />
            </S.Header>
            <S.Body>
              <InsertUserDataBody inputInfoList={inputInfoList} />
            </S.Body>
          </S.Container>
        </ScrollView>
      </S.ScrollContainer>

      <S.Footer botMargin={insets.bottom}>
        <RectBotBtn
          bgColor={theme.palette.blue500}
          content="다음"
          onPress={() => props.navigation.navigate('InsertBusinessData')}
        />
      </S.Footer>
    </S.SafeAreaContainer>
  );
}

export default InsertUserData;
