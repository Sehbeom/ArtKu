import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import {RectBotBtn} from '../../../../../../components/commons/molecules';
import {
  PermissionTitle,
  PermissionBody,
} from '../../../../../../components/Start/Intro/organisms';

function GetPermission({navigation}) {
  const theme = useContext(ThemeContext);

  return (
    <S.Container>
      <S.InnerContainer>
        <S.Header>
          <PermissionTitle />
        </S.Header>

        <S.Body>
          <PermissionBody />
        </S.Body>
      </S.InnerContainer>

      <S.Footer>
        <RectBotBtn
          bgColor={theme.palette.blue500}
          content="시작하기"
          onPress={() => navigation.navigate('SelectRole')}
        />
      </S.Footer>
    </S.Container>
  );
}

export default GetPermission;
