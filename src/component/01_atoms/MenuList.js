import styled from 'styled-components';
import {useEffect} from "react";
import {Link} from "react-router-dom";

const Container = styled('div')`
  //background-color: ${(props) => props.theme.colors.bgDark};
  z-index: 3;
  position: relative;
  margin-top: 50px;
  border-top: 2px solid ${(props) => props.theme.colors.bgDark};
  order: 3;
  
  .sub-show {
    display: block;
  }

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    display: flex;
    border: none;
    margin: 0 3vw 0 3vw;
    order: 2;
    
    #lastItem:hover #subMenu {
      display: block;
    }

  }

  a {
    text-decoration: none;
  }
`;

const Item = styled('h2')`
  color: ${(props) => props.theme.colors.textLight};
  height: 50px;
  border-bottom: 2px solid ${(props) => props.theme.colors.bgDark};
  text-indent: 20px;

  :hover {
    color: ${(props) => props.theme.colors.primAccent};
  }

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    border: none;
    padding: 0 1vw 0 1vw;
    line-height: 50px;
    font-size: 26px;
  }

  @media(min-width: ${(props) => props.theme.breakpoints.l}){
    padding: 0 1.5vw 0 1.5vw;
    font-size: 30px;
  }

  @media(min-width: ${(props) => props.theme.breakpoints.xl}){
    font-size: 34px;
  }
  
  :hover {
    cursor: pointer;
  }

  

`;

const SubItem = styled(Item)`
  height: 30px;
  padding-left: 8vw;
  border: none;
  font-size: 18px;

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    color: ${(props) => props.theme.colors.textHighlight};
    padding: 8px 0 8px 0;
    margin: 0;
    line-height: 30px;
    background-color: ${(props) => props.theme.colors.textLight};
    font-size: 18px;
    text-align: center;
    
    :first-child {
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      padding-top: 10px;
    }
    
    :last-child {
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      padding-bottom: 10px;
    }

    :hover {
      color: ${(props) => props.theme.colors.textDark};
    }
  }
  @media(min-width: ${(props) => props.theme.breakpoints.l}){
    font-size: 24px;
    padding: 10px 0 10px 0;

    :first-child {
      padding-top: 25px;
    }
    
    :last-child {
      padding-bottom: 25px;
    }
  }


`;

const SubMenu = styled('div')`
  color: ${(props) => props.theme.colors.textLight};
  border-bottom: 2px solid ${(props) => props.theme.colors.bgDark};
  display: none;
  padding-top: 20px;
  
  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    border-radius: 10px;
    position: absolute;
    border: none;
    text-align: center;
    width: 30%;
    right: 5%;
    box-shadow: 8px 8px 8px 2px rgba(0, 0, 0, 0.4);
  }
  
  @media(min-width: ${(props) => props.theme.breakpoints.l}){
    
  }
`;

const SubButton = styled('button')`
  color: ${(props) => props.theme.colors.textLight};
  background-color: transparent;
  margin-top: 0;
  margin-left: 15px;
  border: none;
  font-size: 25px;

`;

function MenuList() {

    return (
        <Container id="container">
            <Link to="/">
                <Item>Homepage</Item>
            </Link>
            <Link to="/map">
                <Item id="test">Deep Sea Map</Item>
            </Link>
            <div className="list-container">
                <Item  id="lastItem">Discover Creatures
                    {/*<h2>Discover Species</h2>*/}
                    <SubButton onClick={toggleSubMenu} id="subButton" >v</SubButton>
                <SubMenu id="subMenu">
                    <SubItem>Option 1</SubItem>
                    <SubItem>Option 2</SubItem>
                    <SubItem>Option 3</SubItem>
                </SubMenu>
                </Item>

            </div>
        </Container>
    );
}

function toggleSubMenu(){
    let subMenu = document.querySelector("#subMenu")

        if(subMenu.classList.contains("sub-show")) {
            subMenu.classList.remove("sub-show");
        }

        else {
            subMenu.classList.add("sub-show");
        }
}


export default MenuList;

