import styled from 'styled-components';
import React from "react";
import fish from '../../assets/img/png-image8.png'
import Zoom from '@mui/material/Zoom';
import react from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const Container = styled('div')`
  overflow: hidden;
  width: 100%;
  height: 25em;
  top: 5em;
  padding-top: 3em;
  background-color: ${(props) => props.theme.colors.bgDarker};
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    height: 30em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    height: 35em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    align-items: normal;
    justify-content: center;
    height: 45em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    height: 50em;
    padding-top: 0;
  }
  
  img {
    position: absolute;
    animation-delay: 1000ms;
    animation: slide-in 600ms ease-out forwards;
    top: 10em;
    right: -4em;
    width: 90vw;
    z-index: 1;
    max-width: 35em;

    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      right: -2em;
      max-width: 50em;
      width: 70vw;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      top: 11em;
      width: 85%;
      max-width: 80em;
      right: -5%;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      top: 10em;
      width: 80%;
      max-width: 92em;
      right: 2%;
    }
    @keyframes slide-in {
      from {
        transform: translateX(30%) rotate(-10deg);
        opacity: .2;
      }
      to {
        transform: translateX(0) rotate(-10deg);
        opacity: 1;
      }
    }
  }
  
  .headline {
    display: flex;
    width: 100%;
    justify-content: center;
    
    #overlay {
      z-index: 3;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      justify-content: normal;
    }
  }
  
  .sub-headline {
    @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
      margin: 0 auto;
      width: 20em;
    }
    
    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      width: 30em;
    }
    
    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      margin: 0;
      width: 40em;
    }
  }
  
`;

const Text = styled('div')`
  color: white;
  padding: 2em;
  display: flex;
  flex-direction: column;
  transform: translateX(-30%);
  ${props => props.theme.animations.show};
  animation-delay: 800ms;
  opacity: 0;
  
  h1 {
    position: relative;
    text-align: center;
    letter-spacing: 4px;
    font-size: 50px;
    font-family: "IM Fell Double Pica", sans-serif;
    text-shadow: 8px 8px 4px rgba(0, 0, 0, 0.5);
    padding-right: .4em;
    margin: 0;
    z-index: 1;
    
    @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
      font-size: 65px;
      letter-spacing: 6px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      font-size: 80px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      font-size: 110px;
      text-align: left;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      font-size: 150px;

    }
  }

  h2 {
    font-size: 20px;
    text-align: left;
    margin-bottom: 5px;
    text-shadow: 6px 6px 3px rgba(0, 0, 0, 0.5);

    @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
      font-size: 24px;
      margin-left: -35px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      font-size: 26px;
      margin-left: 0;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      font-size: 36px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      font-size: 46px;
    }
  }

  h3 {
    font-size: 16px;
    text-align: center;
    margin: 5em auto;
    width: 90%;
    font-weight: 400;

    @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
      font-size: 20px;
      margin: 5em auto;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      font-size: 22px;
      margin: 6em auto;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      font-size: 26px;
      text-align: left;
      margin: 7em 0 3em 0;
      width: 70%;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      font-size: 28px;
      text-align: left;
      margin: 7.5em 0 2.5em 0;
      width: 50%;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-left: 10vw;
    width: 60%;
  }
`;

const DownButton = styled('div')`
  width: 4em;
  height: 4em;
  position: absolute;
  bottom: 3.5em;
  left: 25%;
  z-index: 3;
  opacity: 80%;
  transition: transform .6s, opacity .5s;
  
  :hover {
    transform: scale(1.3);
    opacity: 1;
  }
  .icon {
    width: 100%;
    height: 100%;
    color: white;
  }
`;

function Hero() {

    return (
        <Container>
            <Text>
                <div className='sub-headline'>
                    <h2>Discover the</h2>
                </div>
                <div className='headline'>
                    <h1>DEEP</h1>
                    <h1 id='overlay'>SEA</h1>
                </div>
                <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</h3>
            </Text>
            <img className='' alt='Lanternfish' src={fish}/>
            <DownButton className='btn-hover' onClick={scrollDown}>
                <KeyboardArrowDownRoundedIcon className='icon btn-hover'/>
            </DownButton>
        </Container>
    );
}

function scrollDown() {
    const target = document.getElementById('section1')
    console.log(target.style.top);
    // document.body.scrollTo(target.style.top)
    target.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

export default Hero;


