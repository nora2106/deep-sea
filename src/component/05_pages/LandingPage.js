import styled from 'styled-components';
import React from "react";
import Header from "../03_organisms/Header";
import Grid from "../03_organisms/Grid";
// import {colors as theme} from "../../theme";


const Container = styled('div')`
  
  background-color: ${(props) => props.theme.colors.bgDark};
  //background-color: #030C15;
  //width: 100vw;
  //height: 100vh;
  //position: absolute;
  //z-index: 0;
  
`;

export default function LandingPage(){
    return (
            <Container>
                <Header/>
                <Grid/>
            </Container>
    );
}


