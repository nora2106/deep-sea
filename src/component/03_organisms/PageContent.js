import styled from 'styled-components';
import React, {useEffect} from "react";
import bg1 from '../../assets/img/bubble-bg1.png'
import bg2 from '../../assets/img/bubble-bg2.png'
import squid from '../../assets/img/png-image6.png';
import jelly from '../../assets/img/png-image9.png';
import Bubble from "../01_atoms/Bubble";
import FactBox from "../01_atoms/FactBox";
import Wave from "../01_atoms/Wave";
import References from "../02_molecules/References";
import Footer from "../02_molecules/Footer";
import react from "react";
import {Zoom} from "@mui/material";

const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDarker};
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;

  .wave-dark {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTc0LjQ3MDY0IDQ2LjM0NTk0IiB2ZXJzaW9uPSIxLjEiI
    HhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9IndhdmUtZ3JhZGllbnQiIHgxP
    SIwJSIgeTE9IjEwMCUiIHgyPSIwJSIgeTI9IjAlIj4KICAgICAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6IzAzMEMxNTsiIG9mZnNldD0iMCIgaWQ9Im
    RlZXAtb2NlYW4iIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiMwMzBDMTU7IiBvZmZzZXQ9IjEiIGlkPSJzaGFsbG93LW9jZWFuIiAvPg
    ogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHBhdGggc3R5bGU9ImZpbGw6dXJsKCN3YXZlLWdyYWRpZW50KTtmaWxsLXJ1bGU6ZXZlbm
    9kZCIgZD0ibSAwLDExLjM4NDQ4IGMgMCwwIDIxLjEzMzg1MSwxMS4zOTUzMSA0My42MTc2NjEsMTEuMzg0NDEgQyA2Ni4xMDE0NzEsMjIuNzU3OTkgM
    TA3Ljk2ODU2LDAuMDMyNjIKICAgIDEzMC41MDgsN2UtNSBjIDIyLjUzOTQ0LC0wLjAzMjUgNDMuOTYyNjQsMTEuMzg0NDEgNDMuOTYyNjQsMTEuMzg0
    NDEgViA0Ni4zNDU5NCBIIDAgWiIgLz4KPC9zdmc+");
    top: 45em;

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
    bottom: 65px;
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
    ${props => props.theme.animations.show};
    animation-delay: 1000ms;
  }
  
`;


const Section = styled('div')`
  margin-top: 150px;
  width: 100%;
  height: 40em;
  padding-bottom: 5em;
  position: relative;
  background-color: ${(props) => props.theme.colors.bgDark};

  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    height: 50em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    height: 55em;
  }
`;

const Section2 = styled(Section)`
  margin-top: 100px;
  background-color: ${(props) => props.theme.colors.bgDarker};
  height: 20em;
  width: 100%;

  img {
    transform: translateX(-30%);
    width: 40vw;
    top: 8em;
    left: -6%;
  }
`;

const Section3 = styled(Section)`
  margin-top: 0;
  background-color: ${(props) => props.theme.colors.bgDarker};
  height: 50em;
  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    height: 50em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    height: 60em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    height: 62em;
  }

  .bg-image {
    transform: rotate(-15deg) translateX(30%);
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
        // setZoom(true);
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
                if(entry.isIntersecting) {
                    if(entry.target.id === 'map-bubble') {
                        setZoom(true)
                    }
                    else if(entry.target.id === 'discover-bubble') {
                        setZoom2(true)
                    }
                    else if(entry.target.id === 'slider-bubble') {
                        setZoom3(true);
                    }
                    else if(entry.target.classList.contains('fact-box')) {
                        setCollapse(true);
                    }
                    else {
                        entry.target.classList.add('active')
                        // console.log(entry.target.id)
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
                <Bubble show={zoom} link='/map' img={bg2} id="map-bubble" text='Deep Sea Map' icon={'globe-americas'}/>
                <Bubble show={zoom2} link='/discover' img={bg1} id="discover-bubble" text='Discover Creatures'
                        icon={'search'}/>
            </Section>
            <Wave class='wave-dark'/>
            <Section2 id='section2'>
                <FactBox show={collapse}/>
                <img className='show-scroll bg-image ' alt='Bigfin Reef Squid by ' src={squid}/>
            </Section2>
            <Section3 id='section3'>
                <img className='show-scroll bg-image ' alt='Barrel Jellyfish by Nikolay Kovalenko' src={jelly}/>
                <References show={zoom3}/>
                <Wave class='wave-footer'/>
                <Footer/>
            </Section3>
        </Container>
    );
}

export default PageContent;

