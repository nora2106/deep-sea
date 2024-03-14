import styled from 'styled-components';
import wave from '../../assets/svg/wave2.svg'

const Container = styled('div')`
  z-index: 1;

  .wave-dark {
    background-image: url('data:image/svg+xml;charset=UTF-8, 
    <svg viewBox="0 0 174.47064 46.34594" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path style="fill:%23020312" d="m 0,11.38448 c 0,0 21.133851,11.39531 43.617661,11.38441 C 66.101471,22.75799 107.96856,0.03262
      130.508,7e-5 c 22.53944,-0.0325 43.96264,11.38441 43.96264,11.38441 V 46.34594 H 0 Z"/>
    </svg>');
  }

  .wave-light {
    top: 6em;
    z-index: 1;
  }
`;

const WaveAnim = styled('div')`
  --size: -300px;
  --percent: 60%;
  background-image: url('data:image/svg+xml;charset=UTF-8, 
    <svg viewBox="0 0 174.47064 46.34594" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path style="fill:%2308132F" d="m 0,11.38448 c 0,0 21.133851,11.39531 43.617661,11.38441 C 66.101471,22.75799 107.96856,0.03262
    130.508,7e-5 c 22.53944,-0.0325 43.96264,11.38441 43.96264,11.38441 V 46.34594 H 0 Z" />
</svg>');
  background-size: 300px auto;
  background-position-y: bottom;
  position: absolute;
  width: 100vw;
  height: 150px;
  z-index: 1;
  top: 2em;
  background-repeat: repeat-x;
  //animation: wave 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite, swell 8s ease -1.25s infinite;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    top: 0;
    height: 200px;
    background-size: 500px auto;
    transform: scaleX(2);
    --size: 500px;
    --percent: 50%;
  }
  @keyframes wave {
    0% {
      background-position-x: var(--size);
    }
    100% {
      background-position-x: 0;
    }
  }
  @keyframes swell {
    0%, 100% {
      background-position-y: var(--percent)
    }

    50% {
      background-position-y: bottom;
    }
  }
`;

function Wave(props) {
    return (
        <Container className='wave'>
            <WaveAnim className={props.class}/>
        </Container>
    );
}

export default Wave;

