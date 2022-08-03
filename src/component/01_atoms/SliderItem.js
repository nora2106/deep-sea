import styled from 'styled-components';

const Container = styled('a')`
  width: 90%;
  height: 90%;
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  position: relative;

  img {
    border-radius: 100%;
    height: 100%;
    width: auto;
    position: relative;
    transition: opacity .6s ease, transform .5s ease;
  }

`;

function SliderItem(props) {
    return (
        <Container className='bubble-img' onMouseEnter={pause} onMouseLeave={play} href={props.link} target='_blank'>
                <img src={props.img}/>
        </Container>

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
