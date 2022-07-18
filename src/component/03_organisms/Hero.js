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

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    align-items: normal;
    justify-content: center;
    height: 50em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    height: 80em;
  }
  
  img {
    position: absolute;
    transform: rotate(170deg) scaleY(-1);
    top: 9.5em;
    left: 8em;
    width: 90%;
    z-index: 2;
    

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      right: -12%;
      width: 80%;
    }
  }
  
  .headline {
    display: flex;
    
    #overlay {
      z-index: 3;
    }
  }
`;

const Text = styled('div')`
  color: white;
  padding: 2em;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  h1 {
    text-align: center;
    font-size: 70px;
    letter-spacing: 8px;
    font-family: "IM Fell Double Pica", sans-serif;
    padding: 0 .2em;
    z-index: 1;

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      font-size: 72px;
      width: 70%;

    }
  }
  
  h2 {
    font-size: 20px;
    left: 2em;
    position: absolute;
  }
  
  h3 {
    font-size: 18px;
    text-align: center;
    width: 75%;
    margin-top: 2em;
    font-weight: 400;

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      font-size: 28px;
      text-align: left;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 40%;
    padding: 6em;

  }
`;

function Hero() {
    return (
        <Container>
            <Text>
                <h2>Discover the</h2>
                <div className='headline'>
                    <h1>DEEP</h1>
                    <h1 id='overlay'>SEA</h1>
                </div>
                <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</h3>
            </Text>
            <img src={fish}/>
        </Container>
    );
}

export default Hero;

