import {useEffect, useRef} from "react";
import styled from "styled-components";
import Cursor from "../../01_atoms/Cursor";

const Container = styled('div')`

`;

function CursorHandler() {
    const cursorRef = useRef();
    //@todo

    useEffect(() => {
        const onMouseMove = event => {
            trackMouse(event);
        };

        document.addEventListener("mousemove", onMouseMove);

        const elems = document.querySelectorAll('.btn-hover');
        elems.forEach((elem) => {
            elem.addEventListener('mouseenter', cursorActive);
            elem.addEventListener('mouseleave', cursorPassive);
        });
        return () => document.removeEventListener("mousemove", onMouseMove);
    }, []);

    function trackMouse(e) {
        let posX = 0;
        let posY = 0;
        posX = e.clientX || e.touches[0].clientX
        posY = e.clientY || e.touches[0].clientY
        if (document.getElementById('overlay') != null) {
            document.getElementById('overlay').style.setProperty('--cursorX', posX + 'px')
            document.getElementById('overlay').style.setProperty('--cursorY', posY + 'px')
        }

        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
    }

    function cursorActive() {
        cursorRef.current.style.background = 'white';
    }

    function cursorPassive() {
        cursorRef.current.style.background = 'transparent';
    }
    return (
        <Container>
            <Cursor ref={cursorRef}/>
        </Container>
    );
}

export default CursorHandler;
