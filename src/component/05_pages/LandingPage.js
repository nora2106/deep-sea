import styled from 'styled-components';
import React, {useEffect} from "react";
import Header from "../03_organisms/Header";
import Hero from "../03_organisms/Hero";
import PageContent from "../03_organisms/PageContent";
import Cursor from "../01_atoms/Cursor";

const Container = styled('div')`
  cursor: none;
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
  div:hover {
    cursor: none;
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
          circle 10vmax at var(--cursorX) var(--cursorY),
          rgba(0,0,0,0) 0%,
          rgba(0,0,0,.5) 80%,
          rgba(0,0,0,.85) 100%
  )
  

`;
//
// const Cursor = styled('div')`
//   border-radius: 50%;
//   position: fixed;
//   z-index: 5;
//   pointer-events: none;
//   width: 30px;
//   height: 30px;
//   border: 2px solid rgba(255, 255, 255, 0.6);
//   transform: translate(-50%, -50%);
//   transition: transform .5s, background-color .5s;
// `;


export default function LandingPage(){

    // useEffect(() => {
    //     document.addEventListener('mousemove', trackMouse)
    //     document.addEventListener('touchmove', trackMouse)
    //     let posX = 0;
    //     let posY = 0;
    //     const elems = document.querySelectorAll('.btn-hover');
    //     elems.forEach((elem) => {
    //         elem.addEventListener('mouseenter', cursorActive);
    //         elem.addEventListener('mouseleave', cursorPassive);
    //     } );
    //
    //     function trackMouse(e) {
    //         posX = e.clientX || e.touches[0].clientX
    //         posY = e.clientY || e.touches[0].clientY
    //         document.getElementById('overlay').style.setProperty('--cursorX', posX + 'px')
    //         document.getElementById('overlay').style.setProperty('--cursorY', posY + 'px')
    //
    //         document.getElementById('cursor').style.left = e.clientX + 'px';
    //         document.getElementById('cursor').style.top = e.clientY + 'px';
    //
    //
    //     }
    // },[]);
    //
    // function cursorActive() {
    //     document.getElementById('cursor').style.background = 'white';
    // }
    //
    // function cursorPassive() {
    //     document.getElementById('cursor').style.background = 'transparent';
    // }

    return (
            <Container id='page'>
                <Overlay id='overlay'/>
                {/*<Cursor id='cursor'/>*/}
                <Cursor/>
                <Header/>
                <Hero/>
                <PageContent/>
            </Container>
    );

}





