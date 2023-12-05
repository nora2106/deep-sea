import styled from 'styled-components';
import wave from '../../assets/svg/wave3.svg';
import Logo from "../01_atoms/Logo";

const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDark};
  width: 100%;
  overflow: visible;
  position: absolute;
  bottom: 0;
  padding: 1em 0;
  height: 80px;
  
  &.active .animated-isopod {
    animation: Move 13s linear forwards, Switch .8s ease-in 17 forwards;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    height: 90px;
  }
`;

const Image = styled('div')`
  position: absolute;
  width: 20em;
  height: 20em;
  z-index: 3;
  display: block;
  bottom: 42%;
  left: 10%;
  transform: rotate(-8deg) translateX(0) translateY(-20%);
  background-image: url("./img/Isopod1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @keyframes Move {
    0% {
      transform: translateX(1%) rotate(-8deg) translateY(-22%);
    }
    20% {
      transform: translateX(50%) rotate(-4deg) translateY(-20%);
    }
    40% {
      transform: translateX(100%) rotate(0) translateY(-10%);
    }
    60% {
      transform: translateX(150%) rotate(8deg) translateY(5%);
    }
    80% {
      transform: translateX(200%) rotate(10deg) translateY(12%);
    }
    100% {
      transform: translateX(250%) rotate(-4deg) translateY(14%);
    }
  }

  @keyframes Switch {
    0% {
      background-image: url("./img/Isopod2.png");
    }
    49.99% {
      background-image: url("./img/Isopod2.png");
    }
    50% {
      background-image: url("./img/Isopod1.png");
      margin-bottom: 8px;
    }
    100% {
      background-image: url("./img/Isopod1.png");
      margin-bottom: 8px;
    }
  }
`;

const Wave = styled('img')`
  position: absolute;
  width: 100vw;
  z-index: 1;
  bottom: 6em;
  
  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    bottom: 3em;
  }
`;

const Content = styled('div')`
  position: absolute;
  color: ${(props) => props.theme.colors.textLight};
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: start;
  left: .5em;
  bottom: 1em;
  z-index: 3;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    left: 2em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    left: 3em;
    bottom: 2em;
  }
`;

const Text = styled('div')`
  padding: .5em;
  display: block;
  border-left: 1px solid ${(props) => props.theme.colors.textLight};
  position: relative;
  margin-left: .5em;
  font-size: clamp(12px, 3vw, 18px);

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 1em;
    margin-left: 1em;
    border-width: 2px;
  }
`;

function Footer() {
    return (
        <Container className='show-scroll'>
            <Content>
                <Logo/>
                <Text>
                    <p>© Copyright 2023, Nora Klinger</p>
                    <p>♡ Made with React and lots of love</p>
                </Text>
            </Content>
            <Wave className='wave-footer' src={wave}/>
            <Image className='animated-isopod' />
        </Container>
    );
}

export default Footer;

