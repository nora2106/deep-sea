import styled from 'styled-components';

const Container = styled('div')`
    order: 1;
    padding: 10px;
    p{
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

