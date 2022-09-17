import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import IconIonicons from 'react-native-vector-icons/Ionicons';

import {StyledText} from '../../../../commons/molecules';

function CheckBox(props) {
  const theme = useContext(ThemeContext);
  const [text, setText] = React.useState(null);
  const [checkState, setCheckState] = React.useState(false);

  const CheckBtn = (
    <TouchableOpacity
      activeOpacity={1}
      style={{marginRight: 28}}
      onPress={() => setCheckState(!checkState)}>
      <IconIonicons
        name={checkState ? 'checkbox' : 'square-outline'}
        size={28}
        color={checkState ? theme.palette.blue500 : theme.palette.gray200}
      />
    </TouchableOpacity>
  );

  return (
    <S.Container>
      <S.CheckBoxContainer>
        {CheckBtn}
        {/* {CheckBtn} */}
        {props.allCheckTitle && (
          <StyledText
            fontWeight="bold"
            fontSize="16"
            textAlign="left"
            content={props.allCheckTitle}
          />
        )}
        {props.oneCheckTitle && (
          <StyledText
            fontWeight="normal"
            fontSize="16"
            textAlign="left"
            content={props.oneCheckTitle}
          />
        )}
      </S.CheckBoxContainer>
      {props.allCheckTitle && <S.AllCheckBoxMargin />}
    </S.Container>
  );
}

export default CheckBox;
