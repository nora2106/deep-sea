import styled from 'styled-components';
import colors from '../../theme';
import CardImage from "../01_atoms/CardImage";
import CardContent from "../01_atoms/CardContent";
import MapButton from "../01_atoms/MapButton";

const Container = styled('div')`
  border-radius: 1.5em;
  z-index: 1;
  box-shadow:  10px 18px 18px 5px rgba(0, 0, 0, 0.3);

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

