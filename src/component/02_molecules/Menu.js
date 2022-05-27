import styled from 'styled-components';
import Search from "../01_atoms/Search";
import Logo from "../01_atoms/Logo";
import MenuList from "../01_atoms/MenuList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled('div')`
  height: 100vh;
  width: 100%;
  position: absolute;
  

  .show {
    width: 70%;
    height: 100%;
    right: 0;
    background-color: ${(props) => props.theme.colors.bgDarker};
    display:flex;
    flex-direction: column;
    pointer-events: all;
    
    div {
      visibility: visible;
    }


    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      width: 100%;
      height: 140px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }
  }
  

`;

const Overlay = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  pointer-events: none;

  .top-bar {
    background-color: ${(props) => props.theme.colors.bgDarker};
    height: 85px;
    box-shadow:  -10px 12px 18px 5px rgba(0, 0, 0, 0.3);
  }

  #darken {
    background-color: ${(props) => props.theme.colors.bgDarker};
    opacity: 80%;
    pointer-events: none;
    height: 100%;
    width: 100%;
    display: none;
  }
  
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: none;
    pointer-events: none;
  }
`;

const MainMenu = styled('div')`
  background-color: transparent;
  width: 100%;
  height: 100%;
  z-index: 3;
  position: absolute;
  top: 0;
  pointer-events: none;

  div {
    visibility: hidden;
  }


  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    background-color: ${(props) => props.theme.colors.bgDarker};
    box-shadow:  -10px 12px 18px 5px rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    pointer-events: all;
    
    div {
      visibility: visible;
    }
  }
`;

const MenuButton = styled('div')`
  z-index: 4;
  position: fixed;
  background-color: transparent;
  
  
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: none;
  }
  
  .icon {
    height: 40px;
    width: 40px;
    padding: 1em;
  }

`;

function Menu() {

    return (
        <Container>
            <Overlay className="overlay">
                <div className="top-bar"/>
                <div id="darken"/>
            </Overlay>
            <MenuButton onClick={toggleMenu}>
                <FontAwesomeIcon className="icon" icon="fa-solid fa-bars" inverse />
                {/*<FontAwesomeIcon icon={solid('coffee')} />*/}
            </MenuButton>
            <MainMenu className="menu">
                <Logo/>
                <MenuList/>
                <Search/>
            </MainMenu>

        </Container>
    );
}

function toggleMenu() {
    let menu = document.querySelector(".menu");
    let overlay = document.querySelector(".overlay");
    let darken = document.getElementById("darken");

    if(menu.classList.contains("show")) {
        menu.classList.remove("show");
        darken.style.display = "none";
    }
    else {
        menu.classList.add("show");
        darken.style.display = "block";
    }

}

export default Menu;

