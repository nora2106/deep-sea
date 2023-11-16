import styled from 'styled-components';
import outline from "../../assets/svg/dashed-circle.svg";

const Container = styled('div')`
  position: relative;
  pointer-events: none;
  width: 30vw;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;

  .outline-2 {
    pointer-events: none;
    width: 72%;
    height: 72%;
    left: 11%;
    top: 11%;
    //display: none;
  }
`;

const Outline = styled('img')`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

function BubbleSmall() {
    return (
        <Container>
            <Outline className='outline' src={outline}/>
            <Outline className='outline outline-2' src={outline}/>
        </Container>
    );
}

export default BubbleSmall;

//${props => props.theme.animations.rotateRight};
//${props => props.theme.animations.rotateLeft};