import styled from 'styled-components';
import React, {useEffect, useState} from "react";
import fish from '../../assets/img/Anglerfish1.png'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import TextArrow from "../01_atoms/TextArrow";
import Anglerfish from "../01_atoms/Anglerfish";

const Wrapper = styled('div')`
  width: 100%;
  background-color: ${(props) => props.theme.colors.bgDarker};

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    display: flex;
    justify-content: center;
  }
`;

const Container = styled('div')`
  width: 100%;
  height: 100%;
  min-height: 78vh;
  top: 2em;
  padding-top: 3em;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  overflow: hidden;
  max-width: 2048px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    max-width: ${(props) => props.theme.breakpoints.xl};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    max-width: ${(props) => props.theme.breakpoints.xl}
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    max-width: 2048px;
  }
`;

const Text = styled('div')`
  color: white;
  padding: .5em;
  display: flex;
  flex-direction: column;
  opacity: 1;
  height: 100%;
  width: 90%;
  margin-top: 5%;
  z-index: 1;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 1em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 3em 2em 2em 2em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 3em;
    margin-left: 5em;
  }
  
  .h1-first {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-left: 0;
    width: 100%;
    opacity: 0;
    transform: translateX(-30%);
    ${props => props.theme.animations.show};
    animation-delay: 600ms;
  }

  .h1-second {
    margin-left: 40%;
    width: 60%;
    margin-top: 1em;

    h1 {
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      
      &:after {
        content: "L";
        color: ${(props) => props.theme.colors.bgDarker};
        animation: typing 2.5s linear forwards;
        animation-delay: 1.5s;
        text-align: left;
      }
    }

    @keyframes typing {
      0%, 5.8% { content: "L"; color: white}
      5.9%, 11.6% { content: "Li"; }
      11.7%, 17.4% { content: "Lif"; }
      17.5%, 23.2% { content: "Life"; }
      23.3%, 29% { content: "Life "; }
      29.1%, 34.8% { content: "Life i"; }
      34.9%, 46.4% { content: "Life in"; }
      46.5%, 52.2% { content: "Life in "; }
      52.3%, 58% { content: "Life in t"; }
      58.1%, 63.8% { content: "Life in th"; }
      63.9%, 69.6% { content: "Life in the"; }
      69.7%, 75.4% { content: "Life in the "; }
      75.5%, 81.2% { content: "Life in the A"; }
      81.3%, 87% { content: "Life in the Ab"; }
      87.1%, 92.8% { content: "Life in the Aby"; }
      92.9%, 98% { content: "Life in the Abys"; }
      98.1%, 100% { content: "Life in the Abyss"; color: white}
    }
  }

  h1 {
    position: relative;
    text-align: left;
    letter-spacing: -4px;
    font-size: calc(26px + 4.5vw);
    line-height: calc(90%);
    font-family: "Oxanium", sans-serif;
    text-transform: uppercase;
    margin: 0;

    @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
      letter-spacing: -2px;
    }
  }

  .hero-text {
    text-align: right;
    font-weight: 400;
    margin-top: 75%;
    font-size: calc(16px + 1vw);
    line-height: 130%;
    padding-left: 28%;
    animation: textIn 1s ease-in forwards;
    animation-delay: 4000ms;
    opacity: 0;

    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      margin-top: 65%;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      margin-top: 2em;
      width: 40%;
      font-size: calc(18px + 0.5vw);
    }

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      margin-top: 1em;
      text-align: left;
      margin-left: -5%;
    }
    
    @keyframes textIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const Line = styled('div')`
  width: 4.5em;
  border-bottom: .7em solid;
  height: 4.5em;
  animation: type .75s step-end 5;
  animation-delay: .8s;

  @keyframes type {
    from, to { border-color: transparent }
    50% { border-color: white; }
  }
`;

const DownButton = styled('div')`
  width: 4em;
  height: 4em;
  position: absolute;
  top: 90vh;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 2;
  transition: transform .6s, opacity .5s;

  .circle-border {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: none;
    border: 0;
    box-sizing: border-box;
    position: relative;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:before,
    &:after {
      box-sizing: inherit;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }

    &:before {
      border: 2px solid transparent;
    }

    &:after {
      border: 0 solid transparent;
    }

    &:hover {
      :before {
        border-top-color: white;
        border-right-color: white;
        border-left-color: white;
        transition: border-left-color 0.3s linear, border-top-color 0.3s linear 0.25s, border-right-color 0.3s linear 0.25s;
      }

      :after {
        border-left: 2px solid white;
        border-right-width: 2px;
        border-top-width: 2px;
        transform: rotate(180deg);
        transition: transform 0.55s linear 0s, border-bottom-width 0s linear 0.5s, -webkit-transform 0.55s linear 0s;
      }
    }
  }

  .icon {
    width: 90%;
    height: 90%;
    color: white;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 5em;
    height: 5em;
    opacity: .8;
    top: 90vh;

    :hover {
      transform: scale(1.15);
      opacity: 1;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    top: 80vh;
  }
`;

function Hero() {
    const [flashlight, setFlashlight] = useState(false);

    useEffect(() => {
        localStorage.setItem('flashlight', 'off');
    }, []);

    function scrollDown() {
        setFlashlight(true);
        const target = document.getElementById('section1')
        target.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    return (
        <Wrapper>
            <Container>
                <Text>
                    {/*<h2 className='sub-headline'>Discover the</h2>*/}
                        <div className='h1-first'>
                            <h1>Deep Sea</h1>
                            <Line/>
                        </div>
                    <div className='h1-second'>
                        <h1></h1>
                    </div>
                    <h3 className='hero-text'>Dive into the deep and discover reasons for appreciating and protecting
                        this alien world on our planet.</h3>
                </Text>
                <TextArrow show={flashlight}/>
                <Anglerfish/>
                {/*<HeroImage onClick={activateFlashlight} className='hero-image' alt='Anglerfish Illustration' src={fish}/>*/}
            </Container>
            <DownButton className='btn-hover' onClick={scrollDown}>
                <div className="circle-border">
                    <KeyboardArrowDownRoundedIcon className='icon btn-hover'/>
                </div>
            </DownButton>
        </Wrapper>
    );

    function activateFlashlight() {
        setFlashlight(true);
        localStorage.setItem('flashlight', 'on');
    }
}

export default Hero;


