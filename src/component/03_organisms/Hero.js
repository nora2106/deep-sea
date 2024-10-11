import styled from 'styled-components';
import React, {useEffect, useState} from "react";
import TextArrow from "../01_atoms/TextArrow";
import Anglerfish from "../01_atoms/Anglerfish";
import DownButton from "../01_atoms/DownButton";

const Wrapper = styled('div')`
  width: 100%;
  background-color: ${(props) => props.theme.colors.bgDarker};
  padding-bottom: 1em;
  max-height: 75vh;

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-height: 70vh;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
    max-height: 80vh;
  }

  .interactive-angler {
    margin-left: 0;
    margin-right: auto;

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      margin-top: -4em;
      margin-left: 2%;
      display: flex;
      flex-direction: row-reverse;
      gap: 4em;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
      margin-top: -5em;
    }
  }
`;

const Text = styled('div')`
  color: white;
  padding: .5em;
  display: flex;
  flex-direction: column;
  opacity: 1;
  height: 100%;
  width: 90%;
  margin-top: 0;
  z-index: 1;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 1em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 3em 2em 2em 2em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 3em;
    margin-left: 5em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
    margin-top: 3em;
  }

  h1 {
    position: relative;
    text-align: left;
    letter-spacing: -4px;
    font-size: calc(34px + 4.5vw);
    line-height: calc(90%);
    font-family: "Oxanium", sans-serif;
    text-transform: uppercase;
    margin: 0;

    @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
      letter-spacing: -2px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
      font-size: calc(28px + 4.5vw);
    }
  }

  .h1-first {
    display: flex;
    flex-direction: row;
    margin-left: 0;
    gap: 15px;
    width: 100%;
    opacity: 0;
    transform: translateX(-30%);
    ${props => props.theme.animations.show};
    animation-delay: 600ms;

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      gap: 25px;
    }

    .line {
      animation: type .75s step-end 4;
      animation-delay: .8s;

      @keyframes type {
        from, to {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
      }
    }
  }

  .h1-second {
    margin-top: 2em;
    width: 100%;

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      margin-top: 1em;
      margin-left: 40%;
      width: 60%;
    }

    h1 {
      overflow: hidden;
      white-space: nowrap;
      text-align: right;
      font-size: calc(30px + 4.5vw);

      @media (min-width: ${(props) => props.theme.breakpoints.l}) {
        text-align: left;
        font-size: calc(26px + 4.5vw);
      }

      &:after {
        content: "L";
        color: ${(props) => props.theme.colors.bgDarker};
        animation: typing 2.5s linear forwards;
        animation-delay: 1.5s;
        text-align: left;
      }
    }

    @keyframes typing {
      0%, 5.8% {
        content: "L";
        color: white
      }
      5.9%, 11.6% {
        content: "Li";
      }
      11.7%, 17.4% {
        content: "Lif";
      }
      17.5%, 23.2% {
        content: "Life";
      }
      23.3%, 29% {
        content: "Life ";
      }
      29.1%, 34.8% {
        content: "Life i";
      }
      34.9%, 46.4% {
        content: "Life in";
      }
      46.5%, 52.2% {
        content: "Life in ";
      }
      52.3%, 58% {
        content: "Life in t";
      }
      58.1%, 63.8% {
        content: "Life in th";
      }
      63.9%, 69.6% {
        content: "Life in the";
      }
      69.7%, 75.4% {
        content: "Life in the ";
      }
      75.5%, 81.2% {
        content: "Life in the A";
      }
      81.3%, 87% {
        content: "Life in the Ab";
      }
      87.1%, 92.8% {
        content: "Life in the Aby";
      }
      92.9%, 98% {
        content: "Life in the Abys";
      }
      98.1%, 100% {
        content: "Life in the Abyss";
        color: white
      }
    }
  }

  .hero-text {
    margin-top: 2em;
    font-weight: 400;
    font-size: calc(16px + 1vw);
    line-height: 130%;
    animation: textIn 1s ease-in forwards;
    animation-delay: 4000ms;
    opacity: 0;
    width: 100%;
    max-width: 20em;
    margin-left: auto;
    margin-right: 0;
    text-align: left;

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      margin-top: 2em;
      width: 70%;
      font-size: calc(18px + 0.5vw);
      max-width: none;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      width: 50%;
      margin-top: 1em;
      margin-left: 30%;
    }

    @keyframes textIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

function Hero() {
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        localStorage.setItem('flashlight', 'off');
    }, []);

    function scrollDown() {
        localStorage.setItem('flashlight', 'on');
        const target = document.getElementById('section1')
        target.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        setShowText(false);
    }

    function setFlashlight() {
        setShowText(false);
        localStorage.setItem('flashlight', 'on');
    }

    return (
        <Wrapper>
            <div className='show-scroll' id='top'/>
                <Text >
                    <div className='h1-first'>
                        <h1>Deep Sea</h1>
                        <h1 className='line'>_</h1>
                    </div>
                    <div className='h1-second'>
                        <h1></h1>
                    </div>
                    <h3 className='hero-text'>Dive into the deep and discover reasons for appreciating and protecting
                        this alien world on our planet.</h3>
                </Text>
                <div className='interactive-angler'>
                    <TextArrow show={showText}/>
                    <Anglerfish handle={setFlashlight}/>
                </div>
                <DownButton action={scrollDown}/>
        </Wrapper>
    );
}

export default Hero;


