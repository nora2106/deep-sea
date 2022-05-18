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
    
  }
`;

const Overlay = styled('div')`
  width: 60%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.bgDarker};
  z-index: 2;
  position: absolute;
  opacity: 80%;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: none;
  }
  
`;

const MainMenu = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDarker};
  width: 75vw;
  height: 100%;
  z-index: 3;
  position: absolute;
  top: 0;
  right: 0;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    box-shadow:  -10px 12px 18px 5px rgba(0, 0, 0, 0.3);
  }
`;

const MenuButton = styled('button')`
  width: 30px;
  height: 30px;
  z-index: 3;
  position: fixed;
  background-color: white;
  
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: none;
  }

`;

function Menu() {
    return (
        <Container>
            <MenuButton onClick={toggleMenu}/>
            <MainMenu className="mobile-menu">
                <Logo/>
                <Search/>
                <MenuList/>
            </MainMenu>
            <Overlay className="overlay"/>
        </Container>
    );
}

function toggleMenu() {
    // let menu = document.querySelector(".mobile-menu");
    // let overlay = document.querySelector(".overlay")
    //
    // if (menu.style.display === "none") {
    //     menu.style.display = "block";
    //     overlay.style.display = "block";
    // } else {
    //     menu.style.display = "none";
    //     overlay.style.display = "none";
    // }

}

export default Menu;

