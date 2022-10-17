import styled from 'styled-components';
import img from '../../assets/img/species/img_searobin.jpg';
// import img from '../../assets/img/img.png'


const Container = styled('div')`
  //height: 50%;
  text-align: center;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    //height: 45%;
  }

  .btn-icon {
    width: 50%;
    height: 50%;
    padding: 10px;
  }

  img {
      width: 100%;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  }
  
  p {
    color: white;
    font-size: 9px;
    position: absolute;
    z-index: 3;
    bottom: 10px;
    right: 10px;
  }
  

`;



function CardImage() {
    return (
        <Container>
            <p>© MBARI</p>
            <img src={img}/>
        </Container>
    );
}

export default CardImage;

