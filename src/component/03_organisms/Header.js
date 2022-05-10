import styled from 'styled-components';
import React from "react";
import MobileMenu from "../02_molecules/MobileMenu";
import Menu from "../02_molecules/Menu";

const Container = styled('div')`
    
`;

function Header() {
    return (
        <Container>
             <MobileMenu/>
            <Menu/>
            {/*<p>Tesdwt</p>*/}
        </Container>
    );
}

export default Header;

