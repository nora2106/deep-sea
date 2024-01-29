import styled from 'styled-components';
import Slider from './Slider';
import {useEffect} from "react";

const Container = styled('div')`
    position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .reference-wrapper.active {
      display: none;
  }

  .show-scroll.active {
    
    ${props => props.theme.animations.show};
  }
`;

const Text = styled('div')`
  opacity: 0;
  transform: translateY(20px);
  text-align: center;
  color: white;
  margin-bottom: 2em;
  
  h2 {
    font-size: clamp(40px, 3vw, 50px);
    line-height: 20px;
  }
  
  h3 {
    font-size: clamp(26px, 2vw, 36px);
    line-height: 20px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: 6em;
  }
  
`;

function References(props) {
    return (
        <Container>
            <Text className='show-scroll'>
                <h2>Fascinated?</h2>
                <h3>Check out these sites: </h3>
            </Text>
            <Slider show={props.show}/>
        </Container>
    );
}

export default References;

