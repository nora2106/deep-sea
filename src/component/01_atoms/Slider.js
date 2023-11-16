import styled from 'styled-components';
import SliderItem from "./SliderItem";
import logoMbari from '../../assets/img/mbari.jpeg';
import logoPodcast from '../../assets/img/ds-podcast.jpeg';
import logoOceanx from '../../assets/img/oceanx2.png';
import CircleType from 'circletype';
import react, {useEffect, useState} from "react";
import BubbleOutline from "./BubbleOutline";
import Zoom from '@mui/material/Zoom';

const Container = styled('div')`
  height: 25em;
  display: flex;
  flex-direction: row;
  align-items: center;
  //overflow: hidden;
  
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
`;

const Bubble = styled('div')`
  margin-top: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60vw;
  max-width: 20em;
  position: relative;
  aspect-ratio: 1/1;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 40vw;
    max-width: 25em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 25vw;
    max-width: 30em;
  }

  .bubble-wrapper {
    width: 135%;
    height: 135%;
  }

  :hover .bubble {
    animation-play-state: paused;
  }

  .outline-2 {
    display: none;
  }
`;

const Text = styled('p')`
  color: white;
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  margin-top: 1.5em;
`;

const Arrow = styled('div')`
  position: relative;
  border: dotted white;
  border-width: 0 5px 5px 0;
  display: inline-block;
  width: 7vw;
  height: 7vw;
  margin: 1.5em;
  z-index: 3;

  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    margin: 8vw;
    width: 6vw;
    height: 6vw;
  }

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
`;

function Slider(props) {
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

        if (count > slides.length - 1) {
            count = 0;
        }

        if (count < 0) {
            count = slides.length - 1;
        }

        setIndex(count);
        let array = slides[count];
        setName(array[0]);
        setLink(array[1]);
        setImg(array[2]);
    }

    return (
        <Zoom in={props.show} style={{ transitionDuration: '1000ms' }} >
        <Container id='slider-bubble' className='show-scroll'>
            <Arrow id="left" className='btn-hover' onClick={() => showSlides(-1)}/>
            <div className='slider-bubble-container'>
                <Bubble className='btn-hover'>
                    <BubbleOutline/>
                    <SliderItem link={link} img={img}/>
                </Bubble>
                <Text id='curved'>{name}</Text>
            </div>
            <Arrow id="right" className='btn-hover' onClick={() => showSlides(1)}/>
        </Container>
         </Zoom>

    );
}

export default Slider;
