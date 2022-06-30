import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import circle from '../../assets/dotted-circle2.png';
import SliderItem from './SliderItem';

const Container = styled('div')`
  position: relative;
  padding-top: 5em;
  height: 38%;
  
  #discover-bubble {
    float: right;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    height: 20%;
  }
`;

const Card = styled('div')`
  margin: 0 4em;
  height: 220px;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    margin: 0 14em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 20vw;
    height: 20vw;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: 20vw;
    height: 20vw;
  }

  :hover .bubble-img{
    transform: scale(1.1);
    opacity: .6;
    cursor: pointer;
    transition: opacity .6s ease, transform .5s ease;
  }
  
  :hover h3 {
    transition: opacity .4s ease;
    opacity: 0;
    animation: disappear 1s forwards;
  }
  
  :hover .view-btn {
    opacity: 1;
    transition: opacity .8s ease, transform .4s ease, background-color .3s ease;
  }
  
  :hover .icon {
    opacity: 0;
    transition: opacity .4s ease;
  }

  .icon {
    width: 3em;
    height: 3em;
    z-index: 2;
    margin-bottom: 6em;
    position: absolute;
  }
  
  h3{
    font-size: 18px;
    font-weight: 500;
    z-index: 2;
    color: white;
    padding-top: 2.5em;
    animation-delay: 6s;
    transition: opacity .4s ease;
    
    :hover {
      cursor: pointer;
    }

    @keyframes disappear {
      from {
        position: relative;
      }
      to {
        position: absolute;
      }
    }
  }
  
  .bubble-bg {
    //background-color: white;
    //opacity: .6;
    height: 65%;
    width: 65%;
    position: absolute;
    border-radius: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      position: absolute;
    }
  }
  
  :hover .bubble{
    animation-play-state: paused;
  }
`;

const Button = styled('button')`
  opacity: 0;

  z-index: 2;
  position: absolute;
  height: 30px;
  width: 100px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.secAccent};
  color: white;
  border: none;
  font-size: 16px;
  font-family: Quicksand, sans-serif;
  font-weight: 500;
  text-align: center;
  
  .icon-btn {
    width: 30%;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.15);
    //background-color: ${(props) => props.theme.colors.secAccentHighlight};
  }


`;

const Outline = styled('img')`
  width: 19em;
  height: auto;
  margin-right: 10px;
  position: absolute;
  z-index: 1;
  animation-name: rotate;
  animation-duration: 60s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes rotate {
    from{ transform: rotate(-360deg); }
    to{ transform: rotate(360deg); }
  }
  

`;

const Outline2 = styled(Outline)`
  width: 22em;
  height: auto;
  margin-left: 10px;
  margin-top: 5px;
  position: absolute;
  animation-name: rotate2;
  
  @keyframes rotate2 {
    from{ transform: rotate(360deg); }
    to{ transform: rotate(-360deg); }
  }
`;


function Bubble(props) {
    return (
        <Container >
            <div className="wrapper" id={props.id}>
            <Card>
                <Outline className='bubble' src={circle}/>
                <Outline2 className='bubble' src={circle}/>
                {/*<FontAwesomeIcon className="icon" icon={props.icon}/>*/}
                <h3>{props.text}</h3>
                <Button className='view-btn'>View
                    <FontAwesomeIcon className="icon-btn" icon='arrow-right'/>
                </Button>
                <div className="bubble-bg">
                    <SliderItem img={props.img} />
                </div>
            </Card>
            </div>
        </Container>
    );
}

export default Bubble;


