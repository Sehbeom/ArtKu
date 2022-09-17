import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import * as S from './style'

import Swiper from 'react-native-swiper';

import {IntroSwiperCard} from '../../molecules'

function IntroSwiper(props) {
  const theme = useContext(ThemeContext);
  const [swiperContent, setSwiperContent] = useState(null);
  useEffect(()=>{
    const cardList = props.cardInfo.map((info) => (
      <IntroSwiperCard
        cardImage={info.cardImage}
        cardText={info.cardText} />
    ));
    setSwiperContent(
      <Swiper
        autoplay={true}
      >
        {cardList}
      </Swiper>
    )
  },[])
    
  return (
    <S.SwiperContainer>
      {swiperContent!=null && swiperContent}
    </S.SwiperContainer>

  );
}

export default IntroSwiper;
