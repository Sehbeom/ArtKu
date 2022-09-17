import React, {useState} from 'react';
import * as S from './style';

import { RoundBox } from '../../molecules';

function RoleBody(props) {
  const [selected, setSelected] = useState(0);
  return (
    <S.Container>
      <S.BoxContainer>
        <RoundBox
          tinyText={props.firstTinyText}
          boldText={props.firstBoldText}
          onPress={() => {
            setSelected(1);
            props.artistSelected();
          }}
          isPressed={selected == 1 ? true : false}
        />
      </S.BoxContainer>

      <S.BoxContainer>
        <RoundBox
          tinyText={props.secondTinyText}
          boldText={props.secondBoldText}
          onPress={() => {
            setSelected(2);
            props.recruiterSelected();
          }}
          isPressed={selected == 2 ? true : false}
        />
      </S.BoxContainer>
    </S.Container>
  );
}

export default RoleBody;
