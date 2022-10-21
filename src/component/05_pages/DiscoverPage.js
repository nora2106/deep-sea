import styled from 'styled-components';
import React, {useEffect} from "react";
import Header from "../03_organisms/Header";
import Grid from "../03_organisms/Grid";
import {useLocation} from "react-router-dom";
import Cursor from "../01_atoms/Cursor";

const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDark};
  height: 100%;
  min-height: 100vh;
  //cursor: none;
  
  h1 {
    position: absolute;
    margin-top: 5em;
    color: white;
    text-align: center;
  }
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
                {/*<Cursor/>*/}
                {/*<h1>Test</h1>*/}
                <Grid type='discover'/>
                {/*<Grid/>*/}
            </Container>
    );
}


