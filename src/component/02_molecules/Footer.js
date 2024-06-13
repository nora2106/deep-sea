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
    animation: MoveMobile 6s linear forwards, IsopodBody .8s ease-in 8 forwards;

    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      animation: Move 10s linear forwards, IsopodBody .8s ease-in 13 forwards;
    }
  }
  
  .logo {
    height: 4.5em;
    
    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      height: 5.5em;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      height: 7em;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    height: 90px;
  }
`;

const Image = styled('div')`
  position: absolute;
  width: 10em;
  height: 10em;
  z-index: 3;
  display: block;
  bottom: clamp(1rem, 8vw, 10rem);
  transform: rotate(-8deg);
  background-image: url("./img/Isopod1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  offset-path: path("M 1 15.9576 C 104.642 -2.5238 183.6 -1.3046 258.149 5.9019 C 376.089 17.3029 829.914 137.653 924 139");
  offset-rotate: auto;
  --distance: 70%;

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    bottom: clamp(1rem, 10vw, 10rem);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: 20em;
    height: 20em;
    left: 10%;
    bottom: clamp(-6rem, 2vw, -2rem);
    --distance: 95%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    bottom: 2vw;
    left: 15%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
    bottom: clamp(7rem, 6vw, 10rem);
    left: 20%;
  }

  @keyframes Move {
    0% {
      offset-distance: 0;
    }

    100% {
      offset-distance: var(--distance);
    }
  }

  @keyframes MoveMobile {
    0% {
      transform: translateX(0) rotate(-8deg);
    }

    100% {
      transform: translateX(80vw) translateY(50%) rotate(5deg);
    }
  }

  @keyframes IsopodBody {
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
    bottom: 4em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    bottom: 3em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
    bottom: 1em;
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
    left: 5em;
    bottom: 2em;
  }
`;

const Text = styled('div')`
  padding: .5em;
  display: block;
  border-left: 1px solid ${(props) => props.theme.colors.textLight};
  position: relative;
  margin-left: .5em;
  font-size: clamp(10px, 3vw, 18px);

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 1.5em;
    margin-left: 1.5em;
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
            <Wave src={wave}/>
            <Image className='animated-isopod' />
        </Container>
    );
}

export default Footer;

