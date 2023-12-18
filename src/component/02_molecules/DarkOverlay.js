import styled from 'styled-components';

const Container = styled('div')`
  z-index: 4;
  pointer-events: none;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  background: radial-gradient(circle 14vmax at var(--cursorX) var(--cursorY),
  rgba(255, 255, 255, .05) 0%,
  rgba(255, 255, 255, .1) 10%,
  rgba(0, 0, 0, .3) 80%,
  rgba(0, 0, 0, .6) 100%);
`;

function DarkOverlay(props) {

    return (
        <Container className='overlay' id={props.id}>
        </Container>
    );
}

export default DarkOverlay;

