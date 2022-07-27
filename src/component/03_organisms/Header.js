import styled from 'styled-components';
import React from "react";
import Menu from "../02_molecules/Menu";

const Container = styled('div')`
  position: relative;
`;

function Header() {

    return (
        <Container>
             <Menu />
        </Container>
    );
}

export default Header;

