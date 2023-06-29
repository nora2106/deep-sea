import styled from 'styled-components';
import React, {useEffect} from "react";
import Header from "../03_organisms/Header";
import Grid from "../03_organisms/Grid";
import CursorHandler from "../00_base/helpers/CursorHandler";

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

    return (
            <Container>
                <Header/>
                <Grid type='discover'/>
                {/*<BubbleAnimation/>*/}
            </Container>
    );
}


