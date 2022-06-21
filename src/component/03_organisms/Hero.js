import styled from 'styled-components';
import React from "react";
import fish from '../../assets/img/fish-1.png'

const Container = styled('div')`
  overflow: hidden;

  width: 100%;
  height: 65vh;
  top: 5em;
  background-color: ${(props) => props.theme.colors.bgDarker};
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    align-items: normal;
    justify-content: center;
    height: 90vh;

  }
  
  img {
    position: absolute;
    transform: rotate(14deg);
    top: 0;
    width: 110%;
    right: -20%;

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      right: -12%;
      width: 80%;

    }
    
  }
`;

const Text = styled('div')`
  color: white;
  padding: 2em;
  width: 60%;
  margin-top: 160px;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  h1 {
    width: 80%;
    text-align: center;
    font-size: 36px;
    font-family: "IM Fell Double Pica", sans-serif;

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      font-size: 72px;
      width: 70%;

    }
  }
  
  h2 {
    font-size: 16px;
    text-align: center;

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
                <h1>Discover the Deep Sea</h1>
                <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</h2>
            </Text>
            <img src={fish}/>
        </Container>
    );
}

export default Hero;

