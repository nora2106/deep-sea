import styled from 'styled-components';


const Container = styled('div')`
  
  width: 250px;
  height: 250px;
  border-radius: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  //align-items: center;
  
  img {
    border-radius: 100%;
    height: 100%;
    width: auto;
    transition: opacity .6s ease, transform .5s ease;
    position: absolute;
  }

  :hover img{
    transform: scale(1.3);
    opacity: .6;
  }
`;

function SliderItem(props) {
    return (
        <a onMouseEnter={pause} onMouseLeave={play} href={props.link} target='_blank'>
        <Container>
                <img src={props.img}/>
        </Container>
        </a>

    );
}

export default SliderItem;

function pause() {
    const bubble = document.getElementById('bubble-circle');
    bubble.style.animationPlayState = 'paused';
}
function play() {
    const bubble = document.getElementById('bubble-circle');
    bubble.style.animationPlayState = 'running';
}
