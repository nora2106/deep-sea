import styled from 'styled-components';

const Container = styled('a')`
  width: 70%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  position: absolute;
  transition: opacity, width .6s ease;

  img {
    border-radius: 100%;
    height: 100%;
    width: auto;
    position: absolute;
  }
  
   :hover {
     width: 80%;
     opacity: .7;
     cursor: none;
   }
`;

function SliderItem(props) {

    return (
        <Container className='bubble-img'  href={props.link} target='_blank'>
                <img src={props.img}/>
        </Container>
    );
}

export default SliderItem;

