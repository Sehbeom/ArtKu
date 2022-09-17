import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import {BgStartArtkulogo} from '../../../../../../assets/images/start';

import {StyledText} from '../../../../../../components/commons/molecules';
import {RoleBody} from '../../../../../../components/Start/Intro/organisms';

function SelectRole({navigation}) {
  const theme = useContext(ThemeContext);
  return (
    <S.Container>
      <BgStartArtkulogo
        width={140}
        height={170}
        style={{
          position: 'absolute',
          top: theme.windowSize.height * 0.125,
          left: 0,
        }}
      />

      <S.Header>
        <S.TitleBox>
          <StyledText
            fontWeight="bold"
            content={`안녕하세요.\n예술인을 위한 온라인 매니지먼트 플랫폼\n'ArtKu' 입니다.`}
            fontSize="18px"
          />
        </S.TitleBox>
      </S.Header>

      <S.Body>
        <RoleBody
          firstTinyText="아티스트 회원"
          firstBoldText="일자리를 찾으세요?"
          secondTinyText="리크루트 회원 (업체/개인사장님)"
          secondBoldText="일할 사람을 찾으세요?"
          artistSelected={() =>
            navigation.navigate('Introduce', {screen: 'IntroduceSwiper'})
          }
          recruiterSelected={() => navigation.navigate('SelectRecruiterType')}
        />
      </S.Body>
    </S.Container>
  );
}

export default SelectRole;
