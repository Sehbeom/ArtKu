import React from 'react';
import * as S from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {
  IcIntroKakaoBtn,
  IcIntroNaverBtn,
  IcIntroGoogleBtn,
  IcIntroAppleBtn,
} from '../../../../../assets/images/introduce';

function SocialLoginList(props) {
  return (
    <S.ListContainer>
      <TouchableOpacity activeOpacity={0.8}>
        <IcIntroKakaoBtn width="54" height="54" />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8}>
        <IcIntroNaverBtn width="54" height="54" />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8}>
        <IcIntroGoogleBtn width="54" height="54" />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8}>
        <IcIntroAppleBtn width="54" height="54" />
      </TouchableOpacity>
    </S.ListContainer>
  );
}

export default SocialLoginList;
