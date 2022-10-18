import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import circle from '../../assets/dotted-circle2.png';
import SliderItem from './SliderItem';
import {Link} from "react-router-dom";
import BubbleOutline from "./BubbleOutline";

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
  margin: -4em 2em;
  height: 220px;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    margin: 0 12vw;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    margin: .5em 12em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin: 5em 16em;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin: 6em 22vw;
  }

  :hover h3 {
    opacity: 0;
    animation: disappear 1s forwards;
  }
  
  :hover .view-btn {
    opacity: 1;
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
    position: relative;
    font-size: 14px;
    font-weight: 500;
    z-index: 2;
    color: white;
    padding-top: 2.5em;
    animation-delay: 6s;
    transition: opacity .4s ease;
    pointer-events: none;

    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      font-size: 18px;
    }
    
    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      font-size: 22px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      font-size: 24px;
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
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    
    //img {
    //  position: absolute;
    //}
  }
  
  :hover .bubble{
    animation-play-state: paused;
  }
  
  :hover .bubble-img {
    transform: scale(1.14);
    opacity: .7;
  }
  .link {
    position: absolute;
  }
`;

const Button = styled('button')`
  opacity: 0;
  z-index: 2;
  position: relative;
  height: 30px;
  width: 100px;
  border-radius: 15px;
  background-color: rgba(12, 22, 42, 0.8);
  color: white;
  border: none;
  font-size: 16px;
  font-family: Quicksand, sans-serif;
  font-weight: 500;
  text-align: center;
  transition: opacity .8s ease, transform .4s ease, background-color .3s ease;

  .icon-btn {
    width: 30%;
  }

  :hover {
    transform: scale(1.14);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    height: 38px;
    width: 130px;
    border-radius: 18px;
  }
`;

const Outline = styled('img')`
  pointer-events: none;
  width: 70vw;
  max-width: 25em;
  height: auto;
  margin-right: 10px;
  position: absolute;
  z-index: 1;
  ${props => props.theme.animations.rotateRight};

  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    width: 60vw;
    max-width: 23em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    max-width: 24em;
    width: 44vw;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    max-width: 32em;
    width: 35vw;
  }

`;

const Outline2 = styled(Outline)`
  width: 80vw;
  max-width: 28em;
  height: auto;
  margin-left: 10px;
  margin-top: 5px;
  position: absolute;
  ${props => props.theme.animations.rotateLeft};

  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    width: 70vw;
    max-width: 26em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    max-width: 28em;
    width: 50vw;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    max-width: 36em;
    width: 40vw;
  }
`;


function Bubble(props) {
    return (
        <Container >

            <div className="wrapper" id={props.id}>

            <Card>
                {/*<Outline className='bubble' src={circle}/>*/}
                {/*<Outline2 className='bubble' src={circle}/>*/}
                <BubbleOutline/>
                <BubbleOutline/>
                <h3>{props.text}</h3>
                <Link className='link' to={props.link}>
                <Button className='view-btn'>View
                        <FontAwesomeIcon className="icon-btn" icon='arrow-right'/>
                    </Button>
                </Link>
                <div className="bubble-bg">
                    <SliderItem img={props.img} />
                </div>
            </Card>
            </div>
        </Container>
    );
}


export default Bubble;


