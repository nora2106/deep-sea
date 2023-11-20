import styled from 'styled-components';
import wave from '../../assets/svg/wave3.svg';
import Logo from "../01_atoms/Logo";

const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDark};
  width: 100%;
  height: 90px;
  overflow: visible;
  position: absolute;
  bottom: 0;
  padding: 1em 0;
`;

const Wave = styled('img')`
  position: absolute;
  bottom: 0;
  width: 100vw;
  z-index: 1;
`;

const Content = styled('div')`
  position: absolute;
  color: ${(props) => props.theme.colors.textLight};
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: start;
  left: 2em;
  bottom: 1em;
  z-index: 3;
`;

const Text = styled('div')`
  padding: 1em;
  display: block;
  border-left: 2px solid white;
  color: white;
  position: relative;
  margin-left: 1em;
`;

function Footer() {
    return (
        <Container>
            <Content>
                <Logo/>
                <Text>
                    <p>© Copyright 2023, Nora Klinger</p>
                    <p>♡ Made with React and lots of love</p>
                </Text>
            </Content>
            <Wave class='wave-footer' src={wave}/>
        </Container>
    );
}

export default Footer;

