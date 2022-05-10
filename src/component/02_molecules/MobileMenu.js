import styled from 'styled-components';
import { colors } from '../../theme';
import Search from "../01_atoms/Search";
import Logo from "../01_atoms/Logo";
import MenuItem from "../01_atoms/MenuItem";


const Container = styled('div')`
  height: 100vh;
  width: 100%;
  position: absolute;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: none;
  }
`;

const Overlay = styled('div')`
  width: 60%;
  height: 100%;
  background-color: black;
  z-index: 2;
  position: absolute;
  opacity: 85%;

`;

const Menu = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDarker};
  width: 75vw;
  height: 100%;
  z-index: 3;
  position: absolute;
  top: 0;
  right: 0;
`;

function MobileMenu() {
    return (
        <Container>
            <Menu>
                <Logo/>
                <Search/>
                <MenuItem/>
                {/*<p>Tedsdst</p>*/}
            </Menu>
            {/*<Overlay/>*/}
        </Container>
    );
}

export default MobileMenu;

