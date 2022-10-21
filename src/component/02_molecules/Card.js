import styled from 'styled-components';
import CardImage from "../01_atoms/CardImage";
import CardContent from "../01_atoms/CardContent";
import Switch from "@mui/material/Switch";
import react, {useEffect} from "react";
import {FormControlLabel, Grow} from "@mui/material";

const Container = styled('div')`
  border-radius: 1.5em;
  z-index: 1;
  width: 100%;
  
  div {
    position: relative;
  }
`;

function Card(props) {
    const checked = props.anim;

    // useEffect(() => {
    //     setTimeout(()=>setChecked(true), 1000);
    // }, [])

    return (
        <Grow in={checked} style={{ transformOrigin: '0 0 0' }}>
            <Container>
                <CardImage/>
                <CardContent
                    name={props.name} subName={props.subName} size={props.size}
                             class={props.class} zone={props.zone} diet={props.diet}
                    text={props.text}
                />
            </Container>
        </Grow>

    );
}



export default Card;

