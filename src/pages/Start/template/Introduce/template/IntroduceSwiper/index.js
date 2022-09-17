import React from 'react';
import * as S from './style';

import {
  ImgIntroArtist1,
  ImgIntroArtist2,
  ImgIntroArtist3,
  ImgIntroArtist4,
  ImgIntroRecruiter1,
  ImgIntroRecruiter2,
  ImgIntroRecruiter3,
} from '../../../../../../assets/images/introduce';

import {IntroSwiper, StartBtns} from '../../../../../../components/Start/Introduce/organisms';

function IntroduceSwiper(props) {
  selectedRole="Artist";
  const cardInfo = selectedRole=="Artist" ? (
    [
    {
      cardImage: <ImgIntroArtist1 width={156} height={150} />,
      cardText: `예술계 알바부터 채용까지\n내가 일할 곳을 간편하게 찾아요!`,
    },
    {
      cardImage: <ImgIntroArtist2 width={156} height={150} />,
      cardText: `예술계에 특화된\n맞춤형 포트폴리오로 당신을 보여주세요!`,
    },
    {
      cardImage: <ImgIntroArtist3 width={156} height={150} />,
      cardText: `동료 예술인들과\n자유롭게 소통하며 정보를 나눠요!`,
    },
    {
      cardImage: <ImgIntroArtist4 width={156} height={150} />,
      cardText: `예술계 인사 담당자들이 바라본 나의 모습은?\n분석 그래프로 나의 역량을 확인해보세요!`,
    },
  ])
  : selectedRole=="Recruiter" ? (
    [
      {
        cardImage: <ImgIntroRecruiter1 width={156} height={150} />,
        cardText: `예술계 알바부터 채용까지\n내가 원하는 예술인을 간편하게 고용해요!`,
      },
      {
        cardImage: <ImgIntroRecruiter2 width={156} height={150} />,
        cardText: `예술인들의 개성을 담은\n포트폴리오를 통해 원하는 인재를 찾아요!`,
      },
      {
        cardImage: <ImgIntroRecruiter3 width={156} height={150} />,
        cardText: `다양한 분야의\n예술인들과 소통 할 수 있어요!`,
      },
    ]
  ) : null;
  return (
    <S.Container>
      {cardInfo!=null && (
      <>
        <IntroSwiper cardInfo={cardInfo} />
        <StartBtns 
        goSelectRole={()=>props.navigation.navigate('Intro', {screen:'SelectRole'})} 
        goLogin={()=>props.navigation.navigate('Login')}/>
      </>
      )
      }
    </S.Container>
  );
}

export default IntroduceSwiper;
