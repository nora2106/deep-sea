import styled from 'styled-components';
import React, {useEffect} from "react";
import Header from "../03_organisms/Header";
import Grid from "../03_organisms/Grid";
import {useLocation} from "react-router-dom";

const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDark};
  height: 100%;
  min-height: 100vh;
  
  h1 {
    position: absolute;
    margin-top: 5em;
    color: white;
    text-align: center;
  }
`;

const Cursor = styled('div')`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 100%;
  position: absolute;
  z-index: 5;
  transform: translate(-50%, -50%);
`;

export default function DiscoverPage(){

    const location = useLocation();
    let zone;
    if(location.state !== null){
         zone = location.state.val;
        console.log(zone);
    }

    return (
            <Container>
                <Header/>
                {/*<h1>Test</h1>*/}
                <Grid type='discover'/>
                {/*<Grid/>*/}
            </Container>
    );
}


