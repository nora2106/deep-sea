import styled from 'styled-components';
import React, { useRef} from "react";
import Header from "../03_organisms/Header";
import Grid from "../03_organisms/Grid";

const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDarker};
  height: 100%;
  min-height: 100vh;
  
  h1 {
    position: absolute;
    margin-top: 5em;
    color: white;
    text-align: center;
  }
`;


export default function DiscoverPage(){
    const CursorHandlerRef = useRef();

    function callChild() {
        CursorHandlerRef.current.update();
    }

    return (
            <Container>
                <Header theRef={CursorHandlerRef}/>
                <Grid update={callChild} type='discover'/>
            </Container>
    );
}


