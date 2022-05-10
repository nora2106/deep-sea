import styled from 'styled-components';
import React from "react";
import colors from '../../constants';
import Header from "../03_organisms/Header";
import Grid from "../03_organisms/Grid";


const Container = styled('div')`
  background-color: #0D1D29;
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


