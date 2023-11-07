import styled from 'styled-components';

const Container = styled('div')`
  order: 1;
  padding: 10px;
  z-index: 5;
  position: relative;
  width: fit-content;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: auto;
    margin: 0;
  }

  p {
    font-family: "IM Fell Double Pica", sans-serif;
    color: white;
    text-align: center;
    font-size: 22px;
    margin: 0;
  }
`;

function Logo() {
    return (
        <Container>
            <p>Deep</p>
            <p>Sea</p>
        </Container>
    );
}

export default Logo;

