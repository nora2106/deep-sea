import styled from 'styled-components';

const Container = styled('div')`
    
    p{
      color: white;
      text-align: center;
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

