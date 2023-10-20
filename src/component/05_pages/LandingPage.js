import styled from 'styled-components';
import React, {useEffect, useRef} from "react";
import Header from "../03_organisms/Header";
import Hero from "../03_organisms/Hero";
import PageContent from "../03_organisms/PageContent";
import {ModeContext} from "../00_base/theme/ModeContext";
import DarkOverlay from "../02_molecules/DarkOverlay";

const Container = styled('div')`
  //cursor: none;
  --cursorX: 50vw;
  --cursorY: 50vh;
  height: auto;
  min-height: 100%;
  width: 100%;
  overflow: auto;

  @media (pointer:none), (pointer:coarse) {
    #cursor, 
    .overlay {
      display: none;
    }
  }
  
  &.no-overlay {
    #cursor,
    .overlay {
      display: none;
    }
  }
`;

export default function LandingPage(){
    const {light, toggleLight} = React.useContext(ModeContext);


    return (
            <Container className={light === 'off' ? ` landing-page with-overlay` : ` landing-page no-overlay `} id='page'>
                <DarkOverlay id='overlay'/>
                <Header/>
                <Hero/>
                <PageContent/>
            </Container>
    );

}





