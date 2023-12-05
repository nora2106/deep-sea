import BubbleOutline from "../01_atoms/BubbleOutline";
import BubbleContent from "../01_atoms/BubbleContent";
import {Zoom} from "@mui/material";
import styled from "styled-components";

function Bubble(props) {
    const Wrapper = styled('div')`
      position: relative;
      width: fit-content;
      z-index: 3;

      #bubble2 {
        float: right;
      }
    `;

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
        <Wrapper id={props.id} className='show-scroll'>
             <Zoom in={props.show} style={{transitionDuration: '1000ms'}}>
                <Container>
                    <BubbleOutline/>
                    <BubbleContent text={props.text} link={props.link} img={props.img}/>
                </Container>
             </Zoom>
        </Wrapper>
    );
}


export default Bubble;


