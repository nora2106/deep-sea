import styled from 'styled-components';
import logo from '../../assets/svg/logo.svg'
import {Link} from "react-router-dom";

const Container = styled('div')`
  order: 1;
  height: 80%;
  padding: 3%;
  z-index: 5;
  position: relative;
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin: 0;
    padding: 0;
  }

  img {
    width: 85%;
    height: 85%;
    margin: 0;
  }
  
  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
  
  p {
    color: white;
    font-family: 'Oxanium', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 0;
    font-size: 12px;
    text-align: center;

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      font-size: 16px;
    }
  }
`;

function Logo() {
    return (
        <Container className='btn-hover'>
            <Link to='/'>
                <img alt='' src={logo}/>
                <p>Abyssal Creatures</p>
            </Link>
        </Container>
    );
}

export default Logo;

