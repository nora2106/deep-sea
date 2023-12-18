import styled from 'styled-components';
import React from "react";

const Container = styled('div')`
  z-index: 3;

  
    &.active .animated-squid {
      animation: Swim 3s ease-in forwards, SquidBody .7s ease-in-out 4;
    }
`;

const Squid = styled('div')`
  background-image: url("./img/VampireSquid1.png");
  transform: rotate(60deg);
  width: 30em;
  height: 30em;
  position: absolute;
  left: -20%;
  top: 80%;
  display: block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  //animation: Swim 3s ease-in forwards, Move .7s ease-in-out 4;
  
  @keyframes Swim {
    0% {
      transform: rotate(60deg) translate(0);
    }
    100% {
      transform: rotate(60deg) translate(40%, -300%);
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
function Name() {
    return (
        <Container className='show-scroll'>
            <Squid className='animated-squid' alt='Vampire Squid Illustration'/>
        </Container>
    );
}

export default Name;

