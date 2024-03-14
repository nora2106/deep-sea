import styled from 'styled-components';

const Container = styled('div')`
  --opacity: 0;
  z-index: 4;
  pointer-events: none;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, .6);
  transition: background-color 2s;

  &::before {
    position: fixed;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    transition: opacity ease-in 0.8s;
    background: radial-gradient(circle 13vmax at var(--cursorX) var(--cursorY),
    rgba(255, 255, 255, .05) 0%,
    rgba(255, 255, 255, .1) 5%,
    rgba(0, 0, 0, .3) 80%,
    rgba(0, 0, 0, .6) 100%);
    opacity: var(--opacity);
  }
`;

function DarkOverlay(props) {

    return (
        <Container className='overlay' id={props.id}>
        </Container>
    );
}

export default DarkOverlay;

