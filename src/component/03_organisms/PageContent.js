import styled from 'styled-components';
import React from "react";
import bg1 from '../../assets/img/bubble-bg1.png'
import bg2 from '../../assets/img/bubble-bg2.png'
import wave from '../../assets/img/wave.svg'
import Bubble from "../01_atoms/Bubble";
import FactBox from "../01_atoms/FactBox";
import References from "../02_molecules/References";
import Footer from "../02_molecules/Footer";


const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDarker};
  position: absolute;
  overflow: hidden;
  width: 100%;

  .wave-dark {
    background-image:  url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTc0LjQ3MDY0IDQ2LjM0NTk0IiB2ZXJzaW9uPSIxLjEiI
    HhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9IndhdmUtZ3JhZGllbnQiIHgxP
    SIwJSIgeTE9IjEwMCUiIHgyPSIwJSIgeTI9IjAlIj4KICAgICAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6IzAzMEMxNTsiIG9mZnNldD0iMCIgaWQ9Im
    RlZXAtb2NlYW4iIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiMwMzBDMTU7IiBvZmZzZXQ9IjEiIGlkPSJzaGFsbG93LW9jZWFuIiAvPg
    ogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHBhdGggc3R5bGU9ImZpbGw6dXJsKCN3YXZlLWdyYWRpZW50KTtmaWxsLXJ1bGU6ZXZlbm
    9kZCIgZD0ibSAwLDExLjM4NDQ4IGMgMCwwIDIxLjEzMzg1MSwxMS4zOTUzMSA0My42MTc2NjEsMTEuMzg0NDEgQyA2Ni4xMDE0NzEsMjIuNzU3OTkgM
    TA3Ljk2ODU2LDAuMDMyNjIKICAgIDEzMC41MDgsN2UtNSBjIDIyLjUzOTQ0LC0wLjAzMjUgNDMuOTYyNjQsMTEuMzg0NDEgNDMuOTYyNjQsMTEuMzg0
    NDEgViA0Ni4zNDU5NCBIIDAgWiIgLz4KPC9zdmc+");
    top: 55em;

    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      top: 60em;
    }
  }
  
  .wave-footer {
    bottom: 65px;
  }
`;

const Wave = styled('div')`
  background-image:  url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTc0LjQ3MDY0IDQ2LjM0NTk0IiB2ZXJzaW9uPSI
      xLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9IndhdmUtZ3JhZGll
      bnQiIHgxPSIwJSIgeTE9IjEwMCUiIHgyPSIwJSIgeTI9IjAlIj4KICAgICAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6IzBEMUQyOTsiIG9mZnNldD0
      iMCIgaWQ9ImRlZXAtb2NlYW4iIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiMwRDFEMjk7IiBvZmZzZXQ9IjEiIGlkPSJzaGFsbG93LW
      9jZWFuIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHBhdGggc3R5bGU9ImZpbGw6dXJsKCN3YXZlLWdyYWRpZW50KTtmaWxsLXJ
      1bGU6ZXZlbm9kZCIgZD0ibSAwLDExLjM4NDQ4IGMgMCwwIDIxLjEzMzg1MSwxMS4zOTUzMSA0My42MTc2NjEsMTEuMzg0NDEgQyA2Ni4xMDE0NzEsMj
      IuNzU3OTkgMTA3Ljk2ODU2LDAuMDMyNjIKICAgIDEzMC41MDgsN2UtNSBjIDIyLjUzOTQ0LC0wLjAzMjUgNDMuOTYyNjQsMTEuMzg0NDEgNDMuOTYyNj
      QsMTEuMzg0NDEgViA0Ni4zNDU5NCBIIDAgWiIgLz4KPC9zdmc+");
  background-size: 500px auto;
  background-position-y: bottom;
  position: absolute;
  width: 100vw;
  height: 200px;
  z-index: 1;
  background-repeat: repeat-x;
  animation: wave 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite, swell 8s ease -1.25s infinite;
  
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    transform: scaleX(2);
  }
  @keyframes wave {
    0% {
      background-position-x: -500px;
    }
    100% {
      background-position-x: 0;
    }
  }
  @keyframes swell {
    0%, 100% {
      background-position-y: 50%;
    }

    50% {
      background-position-y: bottom;
    }
  }
  
`;


const Section = styled('section')`
  margin-top: 150px;
  width: 100%;
  height: 50em;
  padding-bottom: 5em;
  position: relative;
  background-color: ${(props) => props.theme.colors.bgDark};

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    height: 55em;
  }
`;

const Section2 = styled(Section)`
  margin-top: 100px;
  background-color: ${(props) => props.theme.colors.bgDarker};
  height: 15em;
`;

const Section3 = styled(Section)`
  margin-top: 0;
  background-color: ${(props) => props.theme.colors.bgDarker};
  height: 50em;
  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    height: 50em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    height: 50em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    height: 55em;
  }
`;


function PageContent() {
    return (
        <Container>
            <Wave/>
            <Section>
                <Bubble link='/map' img={bg2} id="map-bubble" text='Deep Sea Map' icon={'globe-americas'}/>
                <Bubble link='/discover' img={bg1} id="discover-bubble" text='Discover Creatures' icon={'search'}/>
            </Section>
            <Wave className='wave-dark'/>
            <Section2>
                <FactBox/>
            </Section2>
            <Section3>
                <References/>
                <Wave className='wave-footer'/>
                <Footer/>
            </Section3>
        </Container>
    );
}

export default PageContent;

