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
    top: 47em;

    @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
      top: 55em;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      top: 60em;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
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
  height: 55em;
  padding: 5em 0;
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

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      left: 10%;
    }
  }

  .small-bubbles {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: none;

    &:first-child {
      width: 40vw !important;
      display: none;
    }

    :nth-child(2) {
      width: 32vw;
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
  // @media (min-width: ${(props) => props.theme.breakpoints.s}) {
  //   height: 50em;
  // }
  //
  // @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  //   height: 60em;
  // }
  //
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
                <Bubble show={zoom} link='/discover' img={bg1} id="bubble1" text='Discover Creatures'
                        icon={'search'}/>
                <Bubble show={zoom2} link='/map' img={bg2} id="bubble2" text='View Zones' icon={'globe-americas'}/>
                <div className='small-bubbles'>
                    <BubbleSmall/>
                    <BubbleSmall/>
                    <BubbleSmall/>
                </div>
            </Section>
            {/*<Wave class='wave-dark'/>*/}
            <Section2 id='section2'>
                {/*<FactBox show={collapse}/>*/}
                <img className='show-scroll bg-image squid-img' alt='Vampire Squid Illustratioj ' src={squid}/>
            </Section2>
            <Section3 id='section3'>
                <img className='show-scroll bg-image ' alt='Barrel Jellyfish by Nikolay Kovalenko' src={jelly}/>
                <References show={zoom3}/>
                {/*<Wave class='wave-footer'/>*/}
                <Footer/>
            </Section3>
        </Container>
    );
}

export default PageContent;

