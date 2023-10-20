import styled from 'styled-components';
import React, {useEffect, useImperativeHandle, useRef} from "react";
import Menu from "../02_molecules/Menu";
import CursorHandler from "../00_base/helpers/CursorHandler";

const Container = styled('div')`
  position: relative;
`;

function Header(props) {


    return (
        <Container>
            <CursorHandler ref={props.theRef}/>
            <Menu/>
        </Container>
    );
}

export default Header;

