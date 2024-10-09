import styled from 'styled-components';
import Menu from "../02_molecules/Menu";
import CursorHandler from "../00_base/helpers/CursorHandler";
import MobileMenu from "../02_molecules/MobileMenu";

const Container = styled('div')`
  position: relative;
  min-height: 8em;
  
  .main-menu {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
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
            <Menu showMode={props.show}/>
            <MobileMenu/>
        </Container>
    );
}

export default Header;

