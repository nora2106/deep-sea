import styled from 'styled-components';
import React from "react";
import Header from "../03_organisms/Header";
import Grid from "../03_organisms/Grid";


const Container = styled('div')`
  
  html {
    --bgDarker: #030C15;
    --bgDark: #0D1D29;
    --primAccent: #29ABAD;
    --secAccent: #F75B4B;
    --textHighlight: #787878;
    --cardBg: #FFF;
    --pageBg: #0D1D29;
    --textLight: #FFF;
    --textDark: #000;
  }
  background-color: var(--bgDark);
  //background-color: #030C15;
  //width: 100vw;
  //height: 100vh;
  //position: absolute;
  //z-index: 0;
  
`;

export default function LandingPage(){
    return (
        <Container>

        </Container>
    );
}
