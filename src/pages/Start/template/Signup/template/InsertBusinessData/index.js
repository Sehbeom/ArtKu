import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import {StyledText, RectBotBtn} from '../../../../../../components/commons/molecules';
import {InsertBusinessDataBody} from '../../../../../../components/Start/Signup/organisms';

function InsertBusinessData(props) {
  const theme = useContext(ThemeContext);
  const inputInfoList = [
    {
      contentTitle: '대표자',
      placeHolder: '대표자',
    },
    {
      contentTitle: '주소',
      placeHolder: '주소',
    },
    {
      contentTitle: '상세주소',
      placeHolder: '상세주소',
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
            content={`사업자 정보를\n입력해주세요 👇`}
          />
        </S.Header>
        <S.Body>
          <InsertBusinessDataBody inputInfoList={inputInfoList} />
        </S.Body>
      </S.Container>
      <S.Footer>
        <RectBotBtn
          bgColor={theme.palette.blue500}
          content="다음"
          onPress={() => props.navigation.navigate('InsertUserChar')}
        />
      </S.Footer>
    </S.SafeAreaContainer>
  );
}

export default InsertBusinessData;
