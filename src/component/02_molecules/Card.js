import styled from 'styled-components';
import colors from '../../theme';
import CardImage from "../01_atoms/CardImage";
import CardContent from "../01_atoms/CardContent";

const Container = styled('div')`
  border-radius: 1.5em;
  background-color: grey;
  z-index: 1;
`;

const Content = styled('div')`
    
`;


function Card() {
    return (
        <Container>
            <CardImage/>
            <CardContent/>
        </Container>
    );
}

export default Card;

