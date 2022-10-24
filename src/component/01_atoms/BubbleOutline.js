import styled from 'styled-components';
import circle from '../../assets/dotted-circle2.png';

const Container = styled('div')`
  position: absolute;
  width: 33vw;
  //max-width: 25em;
  min-width: 300px;
  max-width: 600px;
  pointer-events: none;

  :after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  
  .bubble2 {
    pointer-events: none;
    width: 85%;
    height: 85%;
    left: 2vw;
    top: 2vw;
    display: none;
    ${props => props.theme.animations.rotateLeft};
  }
`;

const Outline = styled('img')`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  ${props => props.theme.animations.rotateRight};
`;

function Name() {
    return (
        <Container className='bubble-wrapper'>
            <Outline className='bubble' src={circle}/>
            <Outline className='bubble bubble2' src={circle}/>
        </Container>
    );
}

export default Name;

