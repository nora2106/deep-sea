import {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import styled from "styled-components";
import Cursor from "../../01_atoms/Cursor";

const Container = styled('div')`

`;

const CursorHandler = forwardRef(function(props, ref) {
    const cursorRef = useRef();
    let currentColor = 'white';

    useEffect(() => {
        setTimeout(setOverlayPosition, 2400)
        const onMouseMove = event => {
            trackMouse(event);
        };
        document.addEventListener("mousemove", onMouseMove);
        updateCursor();
        return () => document.removeEventListener("mousemove", onMouseMove);
    }, []);

    window.addEventListener(('resize'), () => {
        if(localStorage.getItem('flashlight') !== 'on') {
            setOverlayPosition();
        }
    })

    function setOverlayPosition() {
        let overlay = document.getElementById('overlay');
        let light = document.getElementById('lightbulb').getBoundingClientRect();
        overlay.style.setProperty('--cursorX', Math.round(light.right) + 'px')
        overlay.style.setProperty('--cursorY', Math.round(light.top) + 'px')
        overlay.style.setProperty('--opacity', '1');
        overlay.style.background = 'transparent';
    }

    function trackMouse(e) {
        let posX = 0;
        let posY = 0;
        posX = e.clientX || e.touches[0].clientX
        posY = e.clientY || e.touches[0].clientY
        if (document.getElementById('overlay') != null && localStorage.getItem('flashlight') === 'on') {
            document.getElementById('overlay').style.setProperty('--cursorX', posX + 'px')
            document.getElementById('overlay').style.setProperty('--cursorY', posY + 'px')
        }
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
    }

    function cursorActive(color) {
        cursorRef.current.style.background = color;
        cursorRef.current.style.borderColor = color;
    }

    function cursorPassive(color) {
        cursorRef.current.style.background = 'transparent';
        cursorRef.current.style.borderColor = color;
    }

    function updateColor(color) {
        cursorRef.current.style.borderColor = color;
    }

    function updateCursor() {
        const hoverElems = document.querySelectorAll('.btn-hover');
        const whiteElems = document.querySelectorAll('.hover-light');
        hoverElems.forEach((elem) => {
            elem.addEventListener('mouseenter', () => {cursorActive(currentColor)});
            elem.addEventListener('mouseleave', () => {cursorPassive(currentColor)});
        });
        whiteElems.forEach((elem) => {
            elem.addEventListener('mouseenter', () => {
                currentColor = 'black'
                updateColor(currentColor);
            });
            elem.addEventListener('mouseleave', () => {
                currentColor = 'white'
                cursorPassive(currentColor)
            });
        });
    }
    useImperativeHandle(ref, () => ({
        update() {
            updateCursor();
        }
    }))

    return (
        <Container className='cursor-handler'>
            <Cursor ref={cursorRef}/>
        </Container>
    );
})

export default CursorHandler;
