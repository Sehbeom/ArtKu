import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex:1;
justify-content: space-between;
background-color: ${props=>props.theme.palette.white};
`

export const InnerContainer = styled.View`
align-items: center;
height:90%;
`

export const Header = styled.View`
width:100%;
margin-top: 20%;
align-items: center;
box-sizing: border-box;
`

export const Body = styled.View`
margin-top: 64px;
height: 35%;
width:100%;
align-items: center;
box-sizing: border-box;
`

export const Footer = styled.View`
justify-content: flex-end;
height:10%;
bottom: 0;
`
