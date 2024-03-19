import styled from 'styled-components';
import React from "react";
import Header from "../03_organisms/Header";
import Hero from "../03_organisms/Hero";
import PageContent from "../03_organisms/PageContent";
import {ModeContext} from "../00_base/theme/ModeContext";
import DarkOverlay from "../02_molecules/DarkOverlay";

const Container = styled('div')`
  --cursorX: 50vw;
  --cursorY: 50vh;
  height: auto;
  min-height: 100%;
  width: 100%;
  overflow: auto;

  @media (pointer:none), (pointer:coarse) {
    .cursor-handler, 
    .overlay {
      display: none;
    }
  }
  
  &.no-overlay {
    #cursor,
    .overlay {
      display: none;
    }
    
    .flashlight-text {
      display: none;
    }
  }
`;

export default function LandingPage(){
    const {light} = React.useContext(ModeContext);

    return (
            <Container className={light === 'off' ? ` landing-page with-overlay` : ` landing-page no-overlay `} id='page'>
                <DarkOverlay id='overlay'/>
                <Header show={true}/>
                <Hero/>
                <PageContent/>
            </Container>
    );

}





