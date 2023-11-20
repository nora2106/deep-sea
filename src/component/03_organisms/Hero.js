import styled from 'styled-components';
import React from "react";
import fish from '../../assets/img/Anglerfish1.png'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const Wrapper = styled('div')`
  width: 100%;
`;

const Container = styled('div')`
  width: 100%;
  height: 100%;
  min-height: 78vh;
  top: 2em;
  padding-top: 3em;
  background-color: ${(props) => props.theme.colors.bgDarker};
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  overflow: hidden;

  .headline {
    width: fit-content;

    .h1-second {
      text-align: right !important;
      z-index: 3 !important;
    }
  }
`;

const Text = styled('div')`
  color: white;
  padding: .5em;
  display: flex;
  flex-direction: column;
  transform: translateX(-30%);
  ${props => props.theme.animations.show};
  animation-delay: 800ms;
  opacity: 0;
  height: 100%;
  width: fit-content;
  z-index: 1;

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

  h1 {
    position: relative;
    text-align: left;
    letter-spacing: 4px;
    font-size: calc(44px + 6vw);
    line-height: calc(90%);
    font-family: "IM Fell Double Pica", sans-serif;
    text-shadow: 8px 8px 4px rgba(0, 0, 0, 0.5);
    margin: 0;

    @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
      letter-spacing: 6px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      //font-size: calc(50px + 7vw);
    }

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      //font-size: calc(55px + 7vw);
    }

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      //font-size: calc(40px + 7vw);
    }
  }

  .sub-headline {
    font-size: calc(24px + 2vw);
    line-height: 120%;
    text-align: left;
    left: 0;
    margin-bottom: 5px;
    text-shadow: 6px 6px 3px rgba(0, 0, 0, 0.5);

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      margin-left: -1em;
    }
  }

  .hero-text {
    text-align: left;
    font-weight: 400;
    margin-top: 50%;
    font-size: calc(16px + 1vw);
    line-height: 130%;

    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      margin-top: 20%;
      width: 60%;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      margin-top: 2em;
      width: 40%;
      font-size: calc(18px + 0.5vw);
    }

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      margin-top: 1em;
      width: 40%;
      text-align: right;
      margin-left: -5%;
    }
  }
`;

const HeroImage = styled('img')`
  position: absolute;
  animation-delay: 1000ms;
  animation: slide-in 600ms ease-out forwards;
  top: 7.5em;
  right: -4em;
  width: 90vw;
  z-index: 1;
  max-width: 25em;
  transform: rotate(14deg);

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    top: 6em;
    width: 80vw;
    max-width: 30em;
    transform: rotate(12deg);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 60vw;
    max-width: 35em;
    right: -1em;
    top: 5em;
    transform: rotate(5deg);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: 50vw;
    max-width: 50em;
    transform: rotate(-3deg);
    right: 0;
  }

  @keyframes slide-in {
    from {
      transform: translateX(30%);
      opacity: .2;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const DownButton = styled('div')`
  width: 3em;
  height: 3em;
  position: absolute;
  top: 90vh;
  display: block;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 2;
  transition: transform .6s, opacity .5s;

  .icon {
    width: 100%;
    height: 100%;
    color: white;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 4em;
    height: 4em;
    opacity: .8;
    top: 85vh;

    :hover {
      transform: scale(1.3);
      opacity: 1;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    top: 80vh;
  }
`;

function Hero() {

    return (
        <Wrapper>
            <Container>
                <Text>
                    <h2 className='sub-headline'>Discover the</h2>
                    <div className='headline'>
                        <h1>DEEP</h1>
                        <h1 className='h1-second'>SE<span className='text-higher'>A</span></h1>
                    </div>
                    <h3 className='hero-text'>Dive into the depth and discover reasons for appreciating and protecting this alien world on our planet.</h3>
                </Text>
                <HeroImage className='hero-image' alt='Anglerfish Illustration' src={fish}/>
            </Container>
            <DownButton className='btn-hover' onClick={scrollDown}>
                <KeyboardArrowDownRoundedIcon className='icon btn-hover'/>
            </DownButton>
        </Wrapper>
    );
}

function scrollDown() {
    const target = document.getElementById('section1')
    console.log(target.style.top);
    target.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

export default Hero;


