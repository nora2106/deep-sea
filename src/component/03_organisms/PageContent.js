import styled from 'styled-components';
import React from "react";
import bg1 from '../../assets/img/bubble-bg1.png'
import bg2 from '../../assets/img/bubble-bg2.png'
import squid from '../../assets/img/png-image6.png';
import Bubble from "../01_atoms/Bubble";
import FactBox from "../01_atoms/FactBox";
import Wave from "../01_atoms/Wave";
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
    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    }
  }
  
  .wave-footer {
    bottom: 65px;
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
  height: 20em;
  width: 100%;
  
  img {
    position: absolute;
    transform: rotate(170deg) scaleY(-1);
    width: 40vw;
    z-index: 1;
    top: 8em;
    left: -6%;
    display: none;
    
    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      display: block;
    }
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
    height: 55em;
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
            <Wave class='wave-dark'/>
            <Section2>
                <FactBox/>
                    <img alt='Bigfin Reef Squid' src={squid}/>
            </Section2>
            <Section3>
                <References/>
                <Wave class='wave-footer'/>
                <Footer/>
            </Section3>
        </Container>
    );
}

export default PageContent;

