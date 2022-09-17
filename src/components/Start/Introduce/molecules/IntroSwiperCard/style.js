import styled from 'styled-components/native';

export const CardContainer = styled.View`
width:${props=>props.theme.windowSize.width*0.8};
height:270px;
align-items: center;
justify-content: center;
`

export const CardImageContainer = styled.View`
flex:3;
width:100%;
align-items: center;
justify-content: center;
`

export const CardTextContainer = styled.View`
flex:1;
justify-content: center;
width:100%;
`