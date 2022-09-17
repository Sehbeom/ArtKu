import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import {StyledText} from '../../../../../../components/commons/molecules';
import {
  InsertUserAccountInputBox,
  LoginBtn,
} from '../../../../../../components/Start/Login/organisms';

import {TouchableOpacity} from 'react-native-gesture-handler';

export default function InsertUserAccount(props) {
  const theme = useContext(ThemeContext);
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
  ];

  return (
    <S.SafeAreaContainer>
      <S.Container>
        <S.InnerContainer>
          <S.Header>
            <StyledText
              fontWeight="bold"
              fontSize="18"
              textAlign="left"
              content={`ID/PW를\n입력해주세요 👐`}
            />
          </S.Header>
          <S.Body>
            <InsertUserAccountInputBox
              inputInfoList={inputInfoList}
              findidPress={() => {
                props.navigation.navigate('Findid');
              }}
              findpwPress={() => {
                props.navigation.navigate('Findid');
              }}
            />
          </S.Body>
        </S.InnerContainer>

        <S.Footer>
          <LoginBtn
            loginCallBack={() => props.navigation.navigate('Main')}
            goSignup={() => props.navigation.navigate('Signup')}
          />
        </S.Footer>
      </S.Container>
    </S.SafeAreaContainer>
  );
}
