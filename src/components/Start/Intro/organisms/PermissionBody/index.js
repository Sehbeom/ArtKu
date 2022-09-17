import React from 'react';
import * as S from './style';

import { BoldNormText } from '../../molecules';

function PermissionBody(props) {
  return (
    <S.Container>
      <BoldNormText
        boldText="위치(선택)"
        normalText="주소 설정 시 현재위치 자동설정"
      />
      <BoldNormText
        boldText="카메라(선택)"
        normalText="프로필 설정 등 사진 게시를 위한 사진 촬영"
      />
      <BoldNormText
        boldText="사진(선택)"
        normalText="프로필 설정 등 사진 게시를 위한 사진 선택"
      />
    </S.Container>
  );
}

export default PermissionBody;
