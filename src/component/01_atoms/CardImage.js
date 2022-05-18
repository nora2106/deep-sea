import styled from 'styled-components';
import img from '../../assets/img/img.png'

const Container = styled('div')`
    height: 45%;


  img {
      width: 100%;
    border-radius: 1em;
  }
`;

function CardImage() {
    return (
        <Container>
            <img src={img}/>
        </Container>
    );
}

export default CardImage;

