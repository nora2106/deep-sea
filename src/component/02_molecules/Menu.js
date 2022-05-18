import styled from 'styled-components';
import Search from "../01_atoms/Search";
import Logo from "../01_atoms/Logo";
import MenuList from "../01_atoms/MenuList";


const Container = styled('div')`
  height: 100vh;
  width: 100%;
  position: absolute;

  .teaser-menu {
    height: 100px;
    background-color: ${(props) => props.theme.colors.bgDarker};
    z-index: 3;
  }

  .show {
    width: 70%;
    height: 100%;
    right: 0;
    background-color: ${(props) => props.theme.colors.bgDarker};
    display:flex;
    flex-direction: column;
    
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

  .darken {
    background-color: ${(props) => props.theme.colors.bgDarker};
    opacity: 80%;
    
  }

`;

const Overlay = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;

  .top-bar {
    background-color: ${(props) => props.theme.colors.bgDarker};
    height: 100px;
  }
  
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: none;
  }
`;

const MainMenu = styled('div')`
  background-color: transparent;
  width: 100%;
  height: 100%;
  z-index: 3;
  position: absolute;
  top: 0;


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
    
    div {
      visibility: visible;
    }
  }
`;

const MenuButton = styled('button')`
  width: 30px;
  height: 30px;
  z-index: 4;
  position: fixed;
  background-color: white;

  
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: none;
  }

`;

function Menu() {

    return (
        <Container>
            <Overlay className="overlay">
                <div className="top-bar"/>
            </Overlay>
            <MenuButton onClick={toggleMenu}/>
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

    if(menu.classList.contains("show")) {
        menu.classList.remove("show");
        overlay.classList.remove("darken");
    }
    else {
        menu.classList.add("show");
        overlay.classList.add("darken");
    }

}

export default Menu;

