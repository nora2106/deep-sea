import styled from 'styled-components';


const Container = styled('div')`
  height: 45%;
  width: 100%;
  text-align: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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



function CardImage(props) {
    // console.log('../../assets/img/species/' + props.url)
    const imgPath = '../../../public/img/abyssal_spiderfish.jpeg';
    return (
        <Container>
            <p>© MBARI</p>
            <img src={'./img/species/' + props.url}/>
        </Container>
    );
}

export default CardImage;

