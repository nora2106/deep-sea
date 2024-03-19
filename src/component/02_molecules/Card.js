import styled from 'styled-components';
import CardImage from "../01_atoms/CardImage";
import CardContent from "./CardContent";
import {Grow} from "@mui/material";

const Container = styled('div')`
  border-radius: 1.5em;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  max-width: 20em;
  margin: auto;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    max-width: 25em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    max-width: 30em;
  }
  
  div {
    position: relative;
  }
`;

function Card(props) {
    const checked = props.anim;

    return (
        <Grow in={checked} style={{ transformOrigin: '0 0 0' }}>
            <Container>
                <CardImage copyright={props.copyright} url={props.img}/>
                <CardContent
                    name={props.name} subName={props.subName} size={props.size}
                             class={props.class} zone={props.zone} diet={props.diet}
                    text={props.text} link={props.link}
                />
            </Container>
        </Grow>

    );
}



export default Card;

