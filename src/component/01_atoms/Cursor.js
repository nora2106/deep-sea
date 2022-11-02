import styled from 'styled-components';
import {useEffect} from "react";

const Container = styled('div')`
  border-radius: 50%;
  position: fixed;
  z-index: 5;
  pointer-events: none;
  width: 30px;
  height: 30px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  transform: translate(-50%, -50%);
  transition: background-color .8s;
  //transition-duration: 200ms;
  //transition-timing-function: ease-out;

  #cursor2 {
    border: 2px solid rgba(0, 0, 0, 0.6);
  }
`;

function Cursor(props) {

    useEffect(() => {
        document.addEventListener('mousemove', trackMouse)
        document.addEventListener('touchmove', trackMouse)
        let posX = 0;
        let posY = 0;
        const elems = document.querySelectorAll('.btn-hover');
        elems.forEach((elem) => {
            elem.addEventListener('mouseenter', cursorActive);
            elem.addEventListener('mouseleave', cursorPassive);
        } );

        function lerp (start, end, amt){
            return (1-amt)*start+amt*end
        }

        function trackMouse(e) {
            posX = e.clientX || e.touches[0].clientX
            posY = e.clientY || e.touches[0].clientY
            if(props.id === 'cursor1') {
                // document.getElementById('overlay').style.setProperty('--cursorX', posX + 'px')
                // document.getElementById('overlay').style.setProperty('--cursorY', posY + 'px')
                    document.getElementById('overlay').style.setProperty('--cursorX', document.getElementById(props.id).style.left)
                    document.getElementById('overlay').style.setProperty('--cursorY', document.getElementById(props.id).style.top)
                }

            document.getElementById(props.id).style.left = e.clientX + 'px';
            document.getElementById(props.id).style.top = e.clientY + 'px';



        }
    },[]);

    function cursorActive() {
        document.getElementById(props.id).style.background = 'white';
    }

    function cursorPassive() {
        document.getElementById(props.id).style.background = 'transparent';
    }

    return (
        <Container id={props.id}>
        </Container>
    );
}

export default Cursor;

