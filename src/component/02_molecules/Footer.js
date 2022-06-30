import styled from 'styled-components';

const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDark};
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  z-index: 2;
`;

function Footer() {
    return (
        <Container>
            <p>Footer lol</p>
        </Container>
    );
}

export default Footer;

