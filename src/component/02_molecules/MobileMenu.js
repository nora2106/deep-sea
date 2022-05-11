import styled from 'styled-components';
import {colors} from '../../theme';
import Search from "../01_atoms/Search";
import Logo from "../01_atoms/Logo";
import MenuList from "../01_atoms/MenuList";


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
  background-color: ${(props) => props.theme.colors.bgDarker};
  z-index: 2;
  position: absolute;
  opacity: 80%;

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

const MenuButton = styled('button')`
  width: 30px;
  height: 30px;
  z-index: 3;
  position: fixed;
  background-color: white;

`;

function MobileMenu() {
    return (
        <Container>
            <MenuButton onClick={toggleMenu}/>
            <Menu className="mobile-menu">
                <Logo/>
                <Search/>
                <MenuList/>
            </Menu>
            <Overlay className="overlay"/>
        </Container>
    );
}

function toggleMenu() {
    let menu = document.querySelector(".mobile-menu");
    let overlay = document.querySelector(".overlay")

    if (menu.style.display === "none") {
        menu.style.display = "block";
        overlay.style.display = "block";
    } else {
        menu.style.display = "none";
        overlay.style.display = "none";
    }

}

export default MobileMenu;

