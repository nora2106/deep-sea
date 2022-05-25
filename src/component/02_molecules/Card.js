import styled from 'styled-components';
import CardImage from "../01_atoms/CardImage";
import CardContent from "../01_atoms/CardContent";
import MapButton from "../01_atoms/MapButton";

const Container = styled('div')`
  border-radius: 1.5em;
  z-index: 1;
`;

function Card() {
    return (
        <Container>
            <MapButton/>
            <CardImage/>
            <CardContent/>
        </Container>
    );
}

export default Card;

