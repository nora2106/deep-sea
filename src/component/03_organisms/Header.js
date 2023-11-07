import styled from 'styled-components';
import React, {useEffect, useImperativeHandle, useRef} from "react";
import Menu from "../02_molecules/Menu";
import CursorHandler from "../00_base/helpers/CursorHandler";
import MobileMenu from "../02_molecules/MobileMenu";

const Container = styled('div')`
  position: relative;
  
  .main-menu {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    .main-menu {
      display: block;
    }
    
    .mobile-menu {
      display: none;
    }
  }
`;

function Header(props) {

    return (
        <Container>
            <CursorHandler ref={props.theRef}/>
            <Menu/>
            <MobileMenu/>
        </Container>
    );
}

export default Header;

