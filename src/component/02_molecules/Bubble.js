import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SliderItem from '../01_atoms/SliderItem';
import {Link} from "react-router-dom";
import BubbleOutline from "../01_atoms/BubbleOutline";
import {CSSTransition} from "react-transition-group";
import {Zoom} from "@mui/material";
import BubbleContent from "../01_atoms/BubbleContent";

const Container = styled('div')`
  position: relative;
  width: 85vw;
  height: auto;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 20em;
  aspect-ratio: 1 / 1;

  :hover .outline {
    animation-play-state: paused;
  }
  
  #discover-bubble {
    float: right;
  }

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      max-width: 25em;
      width: 45vw;
    }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    max-width: 45em;
    width: 25vw;
  }
`;

function Bubble(props) {
    return (
        <Container id={props.id}>
            {/*<Zoom in={props.show} style={{transitionDuration: '1000ms'}}>*/}
            {/*<div className="wrapper" id={props.id}>*/}
                <BubbleOutline/>
                <BubbleContent text={props.text} link={props.link} show={props.show} img={props.img}/>
            {/*</div>*/}
            {/*</Zoom>*/}
        </Container>
    );
}


export default Bubble;


