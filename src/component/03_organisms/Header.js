import styled from 'styled-components';
import React from "react";
import Menu from "../02_molecules/Menu";
import Cursor from "../01_atoms/Cursor";
import CursorHandler from "../00_base/helpers/CursorHandler";

const Container = styled('div')`
  position: relative;
`;

function Header() {

    return (
        <Container>
            <CursorHandler/>
            <Menu />
        </Container>
    );
}

export default Header;

