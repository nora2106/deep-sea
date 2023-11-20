import styled from 'styled-components';
import outline from '../../assets/svg/dashed-circle.svg'

const Container = styled('div')`
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .outline-2 {
    pointer-events: none;
    width: 85%;
    height: 85%;
    left: 6%;
    top: 6%;
    ${props => props.theme.animations.rotateRight};
    animation-duration: 80s;
  }
  
`;

const Outline = styled('img')`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  ${props => props.theme.animations.rotateLeft};
  animation-duration: 80s;
`;

function BubbleOutline(props) {
    return (
        <Container>
            <Outline className='outline' src={outline}/>
            <Outline className='outline outline-2' src={outline}/>
        </Container>
    );
}

export default BubbleOutline;