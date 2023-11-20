import styled from 'styled-components';
import React, {useEffect} from "react";
import bg1 from '../../assets/img/bubble-bg1.png'
import bg2 from '../../assets/img/bubble-bg2.png'
import squid from '../../assets/img/VampireSquid1.png';
import jelly from '../../assets/img/png-image9.png';
import Bubble from "../02_molecules/Bubble";
import FactBox from "../01_atoms/FactBox";
import Wave from "../01_atoms/Wave";
import References from "../02_molecules/References";
import Footer from "../02_molecules/Footer";
import react from "react";
import {Zoom} from "@mui/material";
import BubbleSmall from "../01_atoms/BubbleSmall";

const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDarker};
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;

  .wave-dark {
    top: 74em;

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      //top: 70em;
    }
  }

  .wave-footer {
    bottom: 0;
  }

  .bg-image {
    position: absolute;
    z-index: 1;
    display: none;
    opacity: 0;

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      display: block;
    }


    @keyframes img-show {
      from {
        transform: scale(.6);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 90%;
      }
    }
  }

  .bg-image.active {
    animation-delay: 1000ms;
    opacity: 1;
  }
`;


const Section = styled('div')`
  margin-top: 150px;
  width: 100%;
  height: 60em;
  padding-top: 8em;
  padding-bottom: 4em;
  position: relative;
  background-color: ${(props) => props.theme.colors.bgDark};

  #bubble1 {
    float: right;
    right: 1em;
    top: 10%;

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      right: 10%;
    }
  }

  #bubble2 {
    top: 25%;
    left: 1em;
    transform: scale(.85);

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      left: 10%;
      top: 40%;
    }
  }

  .small-bubbles {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    
    .small-bubble {
      margin: 1em;
      position: absolute;
      
      &:nth-child(1){
        transform: scale(1);
        right: 0;
        top: 4%;
      }

      &:nth-child(2) {
        transform: scale(.7);
        top: 10%;
      }
      
      &:nth-child(3) {
        transform: scale(.7);
        top: 45%;
      }
      
      &:nth-child(4) {
        transform: scale(.8);
        bottom: 38%;
        right: 0;
      }
      
      &:nth-child(5) {
        bottom: 7%;
        right: 0;
      }

      @media (min-width: ${(props) => props.theme.breakpoints.s}) {
        &:nth-child(4) {
          bottom: 30%;
        }
      }

      @media (min-width: ${(props) => props.theme.breakpoints.m}) {
        &:nth-child(1) {
          top: 3%;
          right: 30%;
          transform: scale(.8);
        }

        &:nth-child(2) {
          top: 14%;
          left: 5%;
        }
        
        &:nth-child(3) {
          top: auto;
          bottom: 14%;
        }

        &:nth-child(4) {
          right: 24%;
          top: auto;
          bottom: 24%;
        }

        &:nth-child(5) {
          bottom: 8%;
        }
      }

      @media (min-width: ${(props) => props.theme.breakpoints.l}) {
        &:nth-child(1) {
          right: 38%;
          transform: scale(1);
        }

        &:nth-child(2) {
          left: 28%;
          top: 26%;
        }

        &:nth-child(3) {
          bottom: 43%;
        }

        &:nth-child(4) {
          right: 28%;
          bottom: 20%;
        }

        &:nth-child(5) {
          right: 8%;
        }
      }

      @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
        &:nth-child(4) {
          right: 40%;
          bottom: 25%;
        }

        &:nth-child(5) {
          right: 16%;
        }
      }
    }
  }
`;

const Section2 = styled(Section)`
  margin-top: 100px;
  background-color: ${(props) => props.theme.colors.bgDarker};
  height: 20em;
  width: 100%;
  z-index: 2;

  img {
    transform: translateX(-30%) rotate(60deg);
    width: 40vw;
    top: 8em;
    left: -6%;
    transition: left .6s ease-in;

    &.active {
      opacity: 1;
      left: 10%;
    }
  }
`;

const Section3 = styled(Section)`
  margin-top: 0;
  background-color: ${(props) => props.theme.colors.bgDarker};
  height: 50em;
  
  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    height: 65em;
  }

  .bg-image {
    width: 20vw;
    top: 0;
    right: -2%;
  }
`;


function PageContent() {
    const [zoom, setZoom] = react.useState(false)
    const [zoom2, setZoom2] = react.useState(false)
    const [collapse, setCollapse] = react.useState(false)
    const [zoom3, setZoom3] = react.useState(false)

    useEffect(() => {
        scrollTrigger('.show-scroll', {
            rootMargin: '-100px'
        })
    }, [])

    function scrollTrigger(selector, options = {}) {
        let els = document.querySelectorAll(selector)
        els = Array.from(els)
        els.forEach(el => {
            addObserver(el, options)
        })
    }

// Receiving options passed from the scrollTrigger function
    function addObserver(el, options) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id === 'map-bubble') {
                        setZoom(true)
                    } else if (entry.target.id === 'discover-bubble') {
                        setZoom2(true)
                    } else if (entry.target.id === 'slider-bubble') {
                        setZoom3(true);
                    } else if (entry.target.classList.contains('fact-box')) {
                        setCollapse(true);
                    } else {
                        entry.target.classList.add('active')
                    }
                    observer.unobserve(entry.target)
                }
            })
        }, options) // Passing the options object to the observer
        observer.observe(el)
    }


    return (
        <Container>
            <Wave/>
            <Section id='section1'>
                <FactBox/>
                <Bubble show={zoom} link='/discover' img={bg1} id="bubble1" text='Discover Creatures'
                        icon={'search'}/>
                <Bubble show={zoom2} link='/map' img={bg2} id="bubble2" text='View Zones' icon={'globe-americas'}/>
                <div className='small-bubbles'>
                    <BubbleSmall/>
                    <BubbleSmall/>
                    <BubbleSmall/>
                    <BubbleSmall/>
                    <BubbleSmall/>
                </div>
            </Section>
            <Wave class='wave-dark'/>
            <Section2 id='section2'>
                <img className='show-scroll bg-image squid-img' alt='Vampire Squid Illustratioj ' src={squid}/>
            </Section2>
            <Section3 id='section3'>
                <References show={zoom3}/>
            </Section3>
            <Footer/>
        </Container>
    );
}

export default PageContent;

