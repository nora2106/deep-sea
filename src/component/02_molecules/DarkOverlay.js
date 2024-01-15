import styled from 'styled-components';

const Container = styled('div')`
  z-index: 4;
  pointer-events: none;
  content: '';
  display: none;
  width: 100%;
  height: 100%;
  position: fixed;
  background: radial-gradient(circle 14vmax at var(--cursorX) var(--cursorY),
  rgba(255, 255, 255, .05) 0%,
  rgba(255, 255, 255, .1) 10%,
  rgba(0, 0, 0, .3) 80%,
  rgba(0, 0, 0, .6) 100%);

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    display: block;
    --cursorX: 55%;
    --cursorY: 16em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    --cursorX: 55vw;
    --cursorY: 17em;
  }

  @media (min-width: 1720px) {
    --cursorX: 60vw;
  }

  @media (min-width: 1720px) {
    --cursorX: 64vw;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
    --cursorX: 58vw;
    --cursorY: 19em;
  }
`;

function DarkOverlay(props) {

    return (
        <Container className='overlay' id={props.id}>
        </Container>
    );
}

export default DarkOverlay;

