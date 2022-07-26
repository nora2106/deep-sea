import styled from 'styled-components';
import CardImage from "../01_atoms/CardImage";
import CardContent from "../01_atoms/CardContent";
import MapButton from "../01_atoms/MapButton";

const Container = styled('div')`
  border-radius: 1.5em;
  z-index: 1;
`;

function Card(props) {
    return (
        <Container>
            <MapButton/>
            <CardImage/>
            <CardContent
                // name={props.name} subName={props.subName} size={props.size}
                //          class={props.class} zone={props.zone} diet={props.diet}
                // text={props.text}
            />
            <p>{props.text}</p>
        </Container>
    );
}

export default Card;

