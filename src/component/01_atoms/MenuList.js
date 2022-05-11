import styled from 'styled-components';
import {useEffect} from "react";

const Container = styled('div')`
  //background-color: ${(props) => props.theme.colors.bgDark};
  z-index: 3;
  position: relative;
  margin-top: 50px;
  border-top: 2px solid ${(props) => props.theme.colors.bgDark};

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    display: flex;
    border: none;
    margin: 0 3vw 0 3vw;

  }
  
  .list-container {
  }

  #lastItem:hover{
    color: ${(props) => props.theme.colors.textHighlight};
    
  }

`;

const Item = styled('h2')`
  color: ${(props) => props.theme.colors.textLight};
  height: 50px;
  border-bottom: 2px solid ${(props) => props.theme.colors.bgDark};
  padding-left: 8vw;

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    border: none;
    padding: 0 2vw 0 2vw;
    line-height: 50px;
  }
  

`;

const SubItem = styled(Item)`
  height: 30px;
  padding-left: 15vw;
  border: none;

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    color: ${(props) => props.theme.colors.textDark};
    //padding-left: 10px;
    display: block;
    padding: 0;
    margin: 0 0 20px;

  }

`;

const SubMenu = styled('div')`
  color: ${(props) => props.theme.colors.textLight};
  display: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.bgDark};

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    background-color: ${(props) => props.theme.colors.textLight};
    border-radius: 10px;
    position: absolute;
    display: block;
    border: none;
    text-align: center;
    width: 250px;
    right: 5%;
    padding: 10px 0 10px 0;
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
            <div onMouseEnter={openSubMenu} onMouseLeave={closeSubMenu} className="list-container">
                <Item  id="lastItem">Discover Creatures
                    <SubButton onClick={toggleMobileMenu} >v</SubButton>
                </Item>
                <SubMenu className="subMenu">
                    <SubItem>Option</SubItem>
                    <SubItem>Option</SubItem>
                    <SubItem>Option</SubItem>
                </SubMenu>
            </div>
        </Container>
    );
}

function toggleMobileMenu(){
    let subMenu = document.querySelector(".subMenu")
    if(subMenu.style.display === "none") {
        subMenu.style.display = "block";

    }
    else {
        subMenu.style.display = "none";
        console.log("toggle");

    }
}

function openSubMenu(){
    let subMenu = document.querySelectorAll(".subMenu");
    subMenu.forEach(subMenu => {
        subMenu.style.display = "block";
    })
}

function closeSubMenu(){
    let subMenu = document.querySelectorAll(".subMenu");
    subMenu.forEach(subMenu => {
        subMenu.style.display = "none";
    })
}


export default MenuList;

