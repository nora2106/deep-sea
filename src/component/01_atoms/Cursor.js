import styled from 'styled-components';
import {forwardRef} from "react";

const Container = styled('div')`
  border-radius: 50%;
  position: fixed;
  z-index: 5;
  pointer-events: none;
  width: 30px;
  height: 30px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  transform: translate(-50%, -50%);
  transition: background-color .8s, border-color .6s;
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.l}) {
    display: block;
  }
`;

const Cursor = forwardRef(function(props, ref) {

    return (
        <Container ref={ref}>
        </Container>
    );
})

export default Cursor;

