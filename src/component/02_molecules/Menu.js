import styled from 'styled-components';
import Logo from "../01_atoms/Logo";
import MenuList from "../01_atoms/MenuList";
import Search from "../01_atoms/Search";

const Container = styled('div')`
  display: none;
  width: 100%;
  height: 140px;
  background-color: ${(props) => props.theme.colors.bgDarker};
  
  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    box-shadow:  -10px 12px 18px 5px rgba(0, 0, 0, 0.3);

  }

`;

function Name() {
    return (
        <Container>
            <Logo/>
            <MenuList/>
            <Search/>
        </Container>
    );
}



export default Name;

