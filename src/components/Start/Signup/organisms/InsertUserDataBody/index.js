import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import {TextInputBox} from '../../../../commons/molecules';

function InsertUserDataBody(props) {
  const theme = useContext(ThemeContext);
  const inputInfoList = props.inputInfoList;
  const inputList = inputInfoList.map(oneInfo => (
    <TextInputBox
      contentTitle={oneInfo.contentTitle}
      placeHolder={oneInfo.placeHolder}
      borderColor={
        oneInfo.contentWarning ? theme.palette.blue500 : theme.palette.gray50
      }
      backgroundColor={
        oneInfo.contentWarning ? theme.palette.white : theme.palette.gray50
      }
      contentInfo={oneInfo.contentInfo}
      contentWarning={oneInfo.contentWarning}
    />
  ));

  return <S.Container>{inputList}</S.Container>;
}

export default InsertUserDataBody;
