import styled from 'styled-components';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled('div')`
    //background-color: ${(props) => props.theme.colors.bgDark};
  z-index: 3;
  position: relative;
  margin-top: 50px;
  border-top: 2px solid ${(props) => props.theme.colors.bgDark};
  order: 3;

  .sub-show {
    display: block;
    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      display: none;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
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

    &:hover {
      cursor: none;
    }
  }

  .sub-arrow {
    margin-left: 10px;
  }
`;

const Item = styled('h2')`
  color: ${(props) => props.theme.colors.textLight};
  height: 50px;
  border-bottom: 2px solid ${(props) => props.theme.colors.bgDark};
  text-indent: 20px;

  :hover {
    color: ${(props) => props.theme.colors.primAccent};
    cursor: none;
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

`;

const SubItem = styled(Item)`
  height: 30px;
  //padding-left: 8vw;
  border: none;
  font-size: 18px;

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    //color: ${(props) => props.theme.colors.textHighlight};
    color: white;
    padding: 8px 0 8px 0;
    margin: 0;
    line-height: 30px;
    font-size: 18px;
    text-align: center;
    
    :hover {
      color: ${(props) => props.theme.colors.textHighLight};
      cursor: none
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
  //color: ${(props) => props.theme.colors.textLight};
  border-bottom: 2px solid ${(props) => props.theme.colors.bgDark};
  display: none;
  padding-top: 20px;

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    padding-top: 10px;
    padding-bottom: 5px;
    background-color: ${(props) => props.theme.colors.bgDark};
    border-radius: 10px;
    position: absolute;
    border: none;
    text-align: center;
    width: 30%;
    right: 5%;
    box-shadow: 8px 8px 8px 2px rgba(0, 0, 0, 0.4);
  }
`;

function MenuList() {

    return (
        <Container id="container">
            <Link to="/">
                <Item className='btn-hover'>Homepage</Item>
            </Link>
            <Link to="/map">
                <Item className='btn-hover' id="test">Deep Sea Map</Item>
            </Link>
            <div className="list-container">
                <Link state={{type: 'discover'}} to='/discover'>
                    <Item className='btn-hover' id='lastItem'>Discover Creatures</Item>
                </Link>
                {/*<Item  id="lastItem">Discover Creatures*/}
                {/*    <FontAwesomeIcon onClick={toggleSubMenu} className="sub-arrow" icon='angle-down'/>*/}
                {/*<SubMenu  id="subMenu">*/}
                {/*    <Link state={{val: "Sunlight Zone"}} to='/discover'>*/}
                {/*        <SubItem>Sunlight Zone</SubItem>*/}
                {/*    </Link>*/}
                {/*    <Link state={{val: "Twilight Zone"}} to='/discover'>*/}
                {/*        <SubItem>Twilight Zone</SubItem>*/}
                {/*    </Link>*/}
                {/*    <Link state={{val: "Midnight Zone"}} to='/discover'>*/}
                {/*        <SubItem>Midnight Zone</SubItem>*/}
                {/*    </Link>*/}
                {/*    <Link state={{val: "Hadal Zone"}} to='/discover'>*/}
                {/*        <SubItem>Hadal Zone</SubItem>*/}
                {/*    </Link>*/}
                {/*</SubMenu>*/}
                {/*</Item>*/}
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

