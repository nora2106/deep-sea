import styled from 'styled-components';


const Container = styled('div')`
  height: 45%;
  width: 100%;
  text-align: center;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    height: 52%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  }
  
  p {
    color: white;
    font-size: clamp(10px, 1vw, 12px);
    position: absolute;
    z-index: 3;
    bottom: 2%;
    right: 5%;
    font-weight: 500;
    text-align: center;
    min-width: 8em;

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      bottom: 3%;
      right: 1%;   
    }
  }
`;

function CardImage(props) {
    return (
        <Container>
            {props.copyright ?
            <p>© {props.copyright}</p>
            : null }
            <img alt={props.name} src={'./img/species/' + props.url}/>
        </Container>
    );
}

export default CardImage;

