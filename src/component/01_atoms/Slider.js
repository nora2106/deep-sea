import styled from 'styled-components';
import SliderItem from "./SliderItem";
import circle from '../../assets/dotted-circle2.png';
import logoMbari from '../../assets/img/mbari.jpeg';
import logoPodcast from '../../assets/img/ds-podcast.jpeg';
import logoOceanx from '../../assets/img/oceanx2.png';
import CircleType from 'circletype';
import {useEffect, useState} from "react";

const Container = styled('div')`
  
  .icon {
    width: 200px;
    height: 200px;
    position: absolute;
  }

  #left {
    transform: rotate(130deg);
  }
  
  #right {
    transform: rotate(-45deg);
  }
  height: 25em;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: no-display;
  
`;

const Bubble = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    width: 32vw;
    height: 32vw;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 25vw;
    height: 25vw;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: 20vw;
    height: 20vw;
  }
  
  img {
    position: absolute;
  }
  
  :hover .bubble-img {
    transform: scale(1.15);
    opacity: .6;
    cursor: pointer;
    transition: opacity .6s ease, transform .5s ease;

  }
  
  #bubble-circle {
    width: 140%;
    height: 140%;
    animation-name: rotate;
    animation-duration: 60s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes rotate {
      from{ transform: rotate(-360deg); }
      to{ transform: rotate(360deg); }
    }
  }
  

`;

const Text = styled('p')`
  color: white;
  position: absolute;
  left: 50%;
  top: 92%;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    top: 98%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    top: 105%;
  }

`;

const Arrow = styled('div')`
  position: relative;
  border: dotted white;
  border-width: 0 5px 5px 0;
  display: inline-block;
  width: 35px;
  height: 35px;
  margin: 3em;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    margin: 7vw;
    width: 4vw;
    height: 4vw;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin: 5vw;
    width: 3vw;
    height: 3vw;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin: 3vw;
  }
  
  :hover {
    cursor: pointer;
  }
`;

function Slider() {
    const slide1 = ['MBARI', 'https://www.mbari.org/', logoMbari];
    const slide2 = ['Deep-Sea Podcast', 'https://www.armatusoceanic.com/the-deepsea-podcast', logoPodcast];
    const slide3 = ['OceanX', 'https://www.oceanx.org/', logoOceanx];

    const slides = [slide1, slide2, slide3];

    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [img, setImg] = useState('');
    const [slideIndex, setIndex] = useState(0);

    useEffect(() => {
        const circleType = new CircleType(document.getElementById('curved'));
        circleType.radius(170).dir(-1);

    });

    useEffect(() => {
        showSlides(0);
    }, []);


    function showSlides(index) {
        let count = slideIndex + index;

        if (count > slides.length -1  ) {
            count = 0;
        }

        if (count < 0) {
            count = slides.length -1;
        }

        setIndex(count);
        let array = slides[count];
        setName(array[0]);
        setLink(array[1]);
        setImg(array[2]);
    }

    return (
        <Container>
            <Arrow id="left" onClick={() => showSlides(-1)} />
            <Bubble >
                <img id='bubble-circle' src={circle}/>
                <SliderItem link={link} img={img}/>
            </Bubble>
            <Text id='curved'>{name}</Text>
            <Arrow id="right" onClick={() => showSlides(1)} />
        </Container>
    );
}

export default Slider;
