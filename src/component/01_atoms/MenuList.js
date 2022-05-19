import styled from 'styled-components';
import {useEffect} from "react";

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
`;

const Item = styled('h2')`
  color: ${(props) => props.theme.colors.textLight};
  height: 50px;
  border-bottom: 2px solid ${(props) => props.theme.colors.bgDark};
  text-indent: 20px;

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    border: none;
    padding: 0 1.5vw 0 1.5vw;
    line-height: 50px;

    :hover {
      color: ${(props) => props.theme.colors.textHighlight};
    }
    
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
    color: ${(props) => props.theme.colors.textDark};
    padding: 0 0 20px;
    margin: 0;
    background-color: ${(props) => props.theme.colors.textLight};
    
    :first-child {
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      padding-top: 5px;
    }
    :last-child {
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      padding-bottom: 25px;
    }

    :hover {
      background-color: grey;
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
    width: 250px;
    right: 5%;
    box-shadow: 8px 8px 8px 2px rgba(0, 0, 0, 0.4);
  }
  
  
`;

const SubButton = styled('button')`
  color: ${(props) => props.theme.colors.textLight};
  background-color: transparent;
  margin-top: 0;
  margin-left: 15px;
  border: none;
  font-size: 25px;

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
  }
`;

function MenuList() {

    return (
        <Container id="container">
            <Item>Homepage</Item>
            <Item id="test">Deep Sea Map</Item>
            <div className="list-container">
                <Item  id="lastItem">Discover Species
                    <SubButton onClick={toggleSubMenu} id="subButton" >v</SubButton>
                <SubMenu id="subMenu">
                    <SubItem>Option</SubItem>
                    <SubItem>Option</SubItem>
                    <SubItem>Option</SubItem>
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

