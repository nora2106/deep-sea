import styled from 'styled-components';
import outline from "../../assets/svg/dashed-circle.svg";

const Container = styled('div')`
  position: relative;
  width: 34vw;
  max-width: 10em;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover .outline {
    animation-play-state: paused;
  }

  .outline-2 {
    width: 72%;
    height: 72%;
    left: 11%;
    top: 11%;
    ${props => props.theme.animations.rotateRight};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 24vw;
    max-width: 16em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: 20vw;
    max-width: 14em;
  }
`;

const Outline = styled('img')`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  ${props => props.theme.animations.rotateLeft};
`;

function BubbleSmall() {
    return (
        <Container className='small-bubble'>
            <Outline className='outline' src={outline}/>
            <Outline className='outline outline-2' src={outline}/>
        </Container>
    );
}

export default BubbleSmall;

//${props => props.theme.animations.rotateRight};
//${props => props.theme.animations.rotateLeft};