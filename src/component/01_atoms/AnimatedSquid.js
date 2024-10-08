import styled from 'styled-components';
import React from "react";

const Container = styled('div')`
  z-index: 3;
  
    &.active .animated-squid {
      animation: Swim 2s ease-in forwards, SquidBody .7s ease-in-out 3;

      @media (min-width: ${(props) => props.theme.breakpoints.m}) {
        animation: Swim 3s ease-in forwards, SquidBody .7s ease-in-out 4;
      }
    }
`;

const Squid = styled('div')`
  background-image: url("./img/VampireSquid1.png");
  transform: rotate(60deg);
  width: 15em; 
  height: 15em;
  position: absolute;
  left: -20%;
  top: 90%;
  display: block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  --endHeight: -10%;
  --endWidth: 75%;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 20em;
    height: 20em;
    --endWidth: 85%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    --endHeight: 5%;
    --endWidth: 90%;
    width: 25em;
    height: 25em;
  }

  @keyframes Swim {
    0% {
      transform: rotate(60deg);
      left: -20%;
      top: 85%;
    }
    100% {
      transform: rotate(50deg);
      left: var(--endWidth);
      top: var(--endHeight);
    }
  }

  @keyframes SquidBody {
    0% {
      background-image: url("./img/VampireSquid1.png");
    }
    30% {
      background-image: url("./img/VampireSquid1.png");
    }
    50% {
      background-image: url("./img/VampireSquid2.png");
    }
    100% {
      background-image: url("./img/VampireSquid2.png");
    }
  }
`;

//@todo decide if inkblob is too much to add
// const InkBlob = styled('div')`
//   position: absolute;
//
// `;
function Name() {
    return (
        <Container className='show-scroll'>
            <Squid className='animated-squid' alt='Vampire Squid Illustration'/>
        </Container>
    );
}

export default Name;

