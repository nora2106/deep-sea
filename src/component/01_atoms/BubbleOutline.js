import styled from 'styled-components';
import circle from '../../assets/dotted-circle2.png';

const Container = styled('div')`
    position: relative;
`;

const Outline = styled('img')`
  pointer-events: none;
  width: 70vw;
  max-width: 25em;
  height: auto;
  position: absolute;
  z-index: 1;
  ${props => props.theme.animations.rotateRight};

  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    width: 60vw;
    max-width: 23em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    max-width: 24em;
    width: 44vw;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    max-width: 32em;
    width: 35vw;
  }

`;

function Name() {
    return (
            <Outline className='bubble' src={circle}/>
    );
}

export default Name;

