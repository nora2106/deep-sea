import styled from 'styled-components';
import SliderItem from "./SliderItem";
import circle from '../../assets/dotted-circle2.png';
import CircleType from 'circletype';
import {useEffect} from "react";

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
  
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Bubble = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 350px;
    height: 350px;
    position: absolute;
  }
`;

const Text = styled('p')`
    color: white;
    position: absolute;
  transform: rotate(-45deg);
  float: right;
`;

const Arrow = styled('div')`
  position: relative;
  border: dotted white;
  border-width: 0 5px 5px 0;
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 2em;
  
  :hover {
  }
`;

function Slider() {

    // useEffect(() => {
    //     const circleType = new CircleType(document.getElementById('curved'));
    //     circleType.radius(180).dir(-1);
    // });


    return (
        <Container>
            <Arrow id="left" />
            <Bubble >
                <img src={circle}/>
                <SliderItem/>
            </Bubble>
            <Text id='curved'>Deep-Sea Podcast</Text>
            <Arrow id="right"/>
        </Container>
    );
}

export default Slider;

