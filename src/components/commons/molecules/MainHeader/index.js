import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as S from './style';

import {LogoStartArtku} from '../../../../assets/images/start';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

function MainHeader(props) {
  return (
    <S.HeaderContainer>
      <S.InnerContainer>
        <S.LogoContainer>
          <LogoStartArtku />
        </S.LogoContainer>
        <S.IconsContainer>
          <TouchableOpacity activeOpacity={0.7}>
            <IconAntDesign name="search1" size={20} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <IconAntDesign name="bells" size={20} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <IconAntDesign name="message1" size={20} />
          </TouchableOpacity>
        </S.IconsContainer>
      </S.InnerContainer>
    </S.HeaderContainer>
  );
}

export default MainHeader;
