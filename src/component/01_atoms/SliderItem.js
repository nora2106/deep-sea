import styled from 'styled-components';

const Container = styled('a')`
  width: 18vw;
  min-width: 180px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  position: absolute;
  transition: opacity .6s ease, transform .6s ease;

  img {
    border-radius: 100%;
    height: 100%;
    width: auto;
    position: absolute;
  }
  
   :hover {
     transform: scale(1.14);
     opacity: .7;
   }
  
  :after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

function SliderItem(props) {
    const btn = document.getElementsByClassName('view-button');
    return (
        <Container className='bubble-img'  href={props.link} target='_blank'>
                <img src={props.img}/>
        </Container>
    );
}

export default SliderItem;

// const mouseEnter = event => {
//     event.currentTarget.style.transform = 'scale(1.14)'
//     event.currentTarget.style.opacity = '.7'
//     const bubbles = document.querySelectorAll('.bubble');
//     bubbles.forEach(bubble => {
//         bubble.style.animationPlayState = 'paused';
//     })
// };
//
// const mouseLeave = event => {
//     event.currentTarget.style.transform = 'scale(1.14)'
//     event.currentTarget.style.opacity = '.7'
//     const bubbles = document.querySelectorAll('.bubble');
//     bubbles.forEach(bubble => {
//         bubble.style.animationPlayState = 'paused';
//     })
// };

function pause() {
    // const bubble = document.getElementsByClassName('bubble-circle');
    // bubble.style.animationPlayState = 'paused';
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(bubble => {
        bubble.style.animationPlayState = 'paused';
    })
}
function play() {
    // const bubble = document.getElementsByClassName('bubble-circle');
    // bubble.style.animationPlayState = 'running';
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(bubble => {
        bubble.style.animationPlayState = 'running';
    })
}
