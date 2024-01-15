import BubbleOutline from "../01_atoms/BubbleOutline";
import BubbleContent from "../01_atoms/BubbleContent";
import {Zoom} from "@mui/material";
import styled from "styled-components";
import SliderItem from "../01_atoms/SliderItem";

function Bubble(props) {

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

      @media (min-width: ${(props) => props.theme.breakpoints.m}) {
        max-width: 25em;
        width: 45vw;
      }

      @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
        max-width: 45em;
        width: 25vw;
      }
    `;


    return (
            <Container>
                <BubbleOutline/>
                <BubbleContent text={props.text} link={props.link} img={props.img}/>
            </Container>
    );
}


export default Bubble;


