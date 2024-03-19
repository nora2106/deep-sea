import styled from 'styled-components';
import {Link} from "react-router-dom";

const Container = styled('div')`
  z-index: 3;
  position: relative;
  order: 3;

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    display: flex;
    border: none;
    margin: 0 3vw 0 3vw;
    order: 2;
  }

  a {
    text-decoration: none;

    &:hover {
      cursor: none;
    }
  }
`;

const Item = styled('h2')`
  color: ${(props) => props.theme.colors.textLight};
  text-indent: 20px;
  font-size: clamp(24px, 2vw, 34px);

  :hover {
    color: ${(props) => props.theme.colors.primAccent};
    cursor: none;
  }

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    height: 50px;
    border: none;
    padding: 0 1vw 0 1vw;
    line-height: 50px;
  }

  @media(min-width: ${(props) => props.theme.breakpoints.l}){
    padding: 0 1.5vw 0 1.5vw;
  }

  @media(min-width: ${(props) => props.theme.breakpoints.xl}){
    font-size: clamp(28px, 1.5vw, 38px);
  }
`;

function MenuList() {

    return (
        <Container className='menu-items'>
            <Link to="/">
                <Item className='btn-hover'>Homepage</Item>
            </Link>
            <Link state={{type: 'discover'}} to='/discover'>
                <Item className='btn-hover'>Discover Creatures</Item>
            </Link>
            <Link to="/map">
                <Item className='btn-hover'>View Zones</Item>
            </Link>
        </Container>
    );
}

export default MenuList;

