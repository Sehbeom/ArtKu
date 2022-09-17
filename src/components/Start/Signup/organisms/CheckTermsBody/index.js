import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import {CheckBox} from '../../molecules';

function CheckTermsBody(props) {
  const theme = useContext(ThemeContext);
  const inputInfoList = props.inputInfoList;
  const inputList = inputInfoList.map(oneInfo => (
    <CheckBox
      allCheckTitle={oneInfo.allCheckTitle}
      oneCheckTitle={oneInfo.oneCheckTitle}
    />
  ));

  return <S.Container>{inputList}</S.Container>;
}

export default CheckTermsBody;
