import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './style';

import IconAntDesign from 'react-native-vector-icons/AntDesign';

import {StyledText} from '../../../../commons/molecules';

function ImageInputBox(props) {
  const theme = useContext(ThemeContext);
  const [text, setText] = React.useState(null);

  return (
    <S.Container>
      <StyledText
        fontWeight="bold"
        fontSize="12"
        textAlign="left"
        content={props.imageTitle}
      />

      <S.ImageContainer activeOpacity={0.8}>
        <IconAntDesign name="plus" size={24} color={theme.palette.black} />
      </S.ImageContainer>
    </S.Container>
  );
}

export default ImageInputBox;
