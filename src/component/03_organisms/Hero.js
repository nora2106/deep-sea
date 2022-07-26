import styled from 'styled-components';
import React from "react";
import fish from '../../assets/img/png-image8.png'

const Container = styled('div')`
  overflow: hidden;
  width: 100%;
  height: 30em;
  top: 5em;
  padding-top: 3em;
  background-color: ${(props) => props.theme.colors.bgDarker};
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    height: 35em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    align-items: normal;
    justify-content: center;
    height: 45em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    height: 55em;
    padding-top: 0;
  }
  
  img {
    position: absolute;
    transform: rotate(170deg) scaleY(-1);
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
      top: 13em;
      width: 80%;
      max-width: 92em;
      right: 0;
    }
  }
  
  .headline {
    display: flex;
    width: 100%;
    justify-content: center;
    
    #overlay {
      z-index: 2;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      justify-content:normal;
    }
  }
  
  .sub-headline {
    margin: 0 auto;
    width: 28em;
    
    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      width: 30em;
    }
    
    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      margin: 0;
    }
  }

`;

const Text = styled('div')`
  color: white;
  padding: 2em;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 70px;
    letter-spacing: 8px;
    font-family: "IM Fell Double Pica", sans-serif;
    text-shadow: 8px 8px 4px rgba(0, 0, 0, 0.5);
    padding-right: .4em;
    z-index: 1;
    margin: 0;

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
    font-size: 24px;
    text-align: left;
    margin-bottom: 5px;
    text-shadow: 6px 6px 3px rgba(0, 0, 0, 0.5);

    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      font-size: 26px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      font-size: 36px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      font-size: 46px;
    }
  }

  h3 {
    font-size: 20px;
    text-align: center;
    margin: 5em auto;
    width: 80%;
    font-weight: 400;

    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      font-size: 22px;
      width: 70%;
      margin: 6em auto;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      font-size: 26px;
      text-align: left;
      margin: 7em 0 3em 0;
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
            <img alt='Lanternfish' src={fish}/>
        </Container>
    );
}

export default Hero;


