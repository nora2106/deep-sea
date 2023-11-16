import styled from 'styled-components';
import wave from '../../assets/svg/wave3.svg';

const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDark};
  width: 100%;
  height: 100px;
  overflow: visible;
  position: absolute;
  bottom: 0;
`;

const Wave = styled('img')`
  position: absolute;
  bottom: 0;
  width: 100vw;
`;

const Text = styled('div')`
  position: absolute;
  color: ${(props) => props.theme.colors.textLight};
  z-index: 2;
`;


function Footer() {
    return (
        <Container>
            <Text>
                <p>Footer lol</p>
            </Text>
            <Wave class='wave-footer' src={wave}/>
        </Container>
    );
}

export default Footer;

