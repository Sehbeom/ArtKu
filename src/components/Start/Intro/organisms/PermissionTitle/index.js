import React from 'react';
import * as S from './style';

import {BgStartUnderline} from '../../../../../assets/images/start';

import {StyledText} from '../../../../commons/molecules';

function PermissionTitle(props) {
  return (
    <S.TitleBox>
      <StyledText
        fontWeight="bold"
        content="잠깐! 앗쿠를 편리하게 이용하기 위해서는"
        fontSize="18px"
      />
      <S.ChangeDirection>
        <StyledText fontWeight="bold" content="아래" fontSize="18px" />
        <S.TextUnderLineContainer>
          <BgStartUnderline
            width={'100%'}
            height={'50%'}
            style={{
              position: 'absolute',
              top: 17,
            }}
          />
          <StyledText
            fontWeight="bold"
            content=" 접근권한의 허용이"
            fontSize="18px"
          />
        </S.TextUnderLineContainer>
        <StyledText fontWeight="bold" content=" 필요해요!" fontSize="18px" />
      </S.ChangeDirection>
    </S.TitleBox>
  );
}

export default PermissionTitle;
