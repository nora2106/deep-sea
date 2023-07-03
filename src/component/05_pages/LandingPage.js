import styled from 'styled-components';
import React, {useEffect} from "react";
import Header from "../03_organisms/Header";
import Hero from "../03_organisms/Hero";
import PageContent from "../03_organisms/PageContent";
import Cursor from "../01_atoms/Cursor";
import CursorHandler from "../00_base/helpers/CursorHandler";

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
    #overlay {
      display: none;
    }
  }

`;

const Overlay = styled('div')`
  z-index: 4;
  pointer-events: none;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  background: radial-gradient(
          circle 12vmax at var(--cursorX) var(--cursorY),
          rgba(0,0,0,0) 0%,
          rgba(0,0,0,.3) 80%,
          rgba(0,0,0,.6) 100%
  );

`;

export default function LandingPage(){

    return (
            <Container id='page'>
                <Overlay id='overlay'/>
                <Header/>
                <Hero/>
                <PageContent/>
            </Container>
    );

}





