import styled from 'styled-components';
import React, {useEffect} from "react";
import Header from "../03_organisms/Header";
import Hero from "../03_organisms/Hero";
import PageContent from "../03_organisms/PageContent";

const Container = styled('div')`
    //cursor: none;
  height: auto;
  min-height: 100%;
  width: 100%;
  overflow: auto;
  //position: fixed;

  .test {
    position: relative;
    height: 40em;
    width: 100%;
    background-color: black;
  }
`;
const Overlay = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDarker};
  opacity: 65%;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 4;
  pointer-events: none;
`;

const Cursor = styled('div')`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 100%;
  position: absolute;
  z-index: 5;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;


export default function LandingPage(){
    useEffect(() => {
        const cursor = document.getElementById('cursor');
        window.addEventListener('mousemove', trackMouse)
        window.addEventListener('scroll', trackScroll)
        let scrollX;
        let scrollY;
        let posX;
        let posY;


        function trackMouse(e) {
            // scrollY = 0;
            posX = e.pageX;
            posY = e.pageY;
            // let coords = "x: " + scrollX + " y: " + scrollY;
            cursor.setAttribute('style', 'left: ' + posX+'px; top: '+posY+'px' )
            console.log('mouse:' + posY);
        }


        function trackScroll() {
            // scrollY = window.scrollY + posY;
            scrollY = window.scrollY + posY;
            console.log('total scroll: ' + window.scrollY)
            console.log('scroll: ' + scrollY);
            // posY = scrollY;
            cursor.setAttribute('style', 'left: ' + 300+'px; top: '+scrollY+'px' )
        }



    },[]);
    // window.addEventListener('scroll', trackScroll)

    return (
            <Container id='page'>
                <Cursor id='cursor'/>
                {/*<Overlay className='overlay'/>*/}
                <Header/>
                <Hero/>
                <PageContent/>
            </Container>
    );
}





