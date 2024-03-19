import styled from 'styled-components';
import logo from '../../assets/svg/logo.svg'

const Container = styled('div')`
  order: 1;
  height: 100%;
  z-index: 5;
  position: relative;
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: auto;
    margin: 0;
  }

  img {
    width: 85%;
    height: 85%;
    margin: 0;
  }
  
  p {
    color: white;
    font-family: 'Oxanium', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: -10px;
    font-size: 20px;
  }
`;

function Logo() {
    return (
        <Container>
            <img src={logo}/>
            <p>Abyssal Creatures</p>
        </Container>
    );
}

export default Logo;

