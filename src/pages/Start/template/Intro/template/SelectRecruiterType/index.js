import React from 'react';
import * as S from './style';

import { StyledText } from '../../../../../../components/commons/molecules';
import {RoleBody} from '../../../../../../components/Start/Intro/organisms';

function SelectRecruiterType({navigation}) {
  return (
    <S.Container>
      <S.Header>
          <S.TitleBox>
            <StyledText fontWeight="bold" content={`사업체 종류를\n선택해주세요. 🏡\n`} fontSize="18px" />
          </S.TitleBox>
      </S.Header>

      <S.Body>
        <RoleBody
          firstBoldText="개인/법인 사업자에요."
          secondBoldText="업체 아닌 개인이에요."
          artistSelected={() => navigation.navigate('Introduce', {screen:'IntroduceSwiper'})}
          recruiterSelected={() => navigation.navigate('Introduce', {screen:'IntroduceSwiper'})}
        />
      </S.Body>
    </S.Container>
  );
}

export default SelectRecruiterType;
