import styled from 'styled-components';
import Search from "../01_atoms/Search";
import Logo from "../01_atoms/Logo";
import MenuList from "../01_atoms/MenuList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModeButton from "../01_atoms/ModeButton";

const Container = styled('div')`
  height: 100vh;
  width: 100%;
  position: absolute;
  .show {
    width: 70%;
    height: 100%;
    right: 0;
    background-color: ${(props) => props.theme.colors.bgDarker};
    display: flex;
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

const MainMenu = styled('div')`
  z-index: 4;
  background-color: transparent;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  pointer-events: none;

  div {
    visibility: hidden;
  }
  
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    position: sticky;
    background-color: ${(props) => props.theme.colors.bgDarker};
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

function Menu(props) {
    return (
        <Container className='main-menu'>
            <MainMenu className="menu">
                <Logo/>
                <MenuList/>
                <ModeButton/>
                <Search />
            </MainMenu>

        </Container>
    );
}

export default Menu;

