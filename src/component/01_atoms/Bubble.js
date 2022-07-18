import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import circle from '../../assets/dotted-circle2.png';
import SliderItem from './SliderItem';
import {Link} from "react-router-dom";

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
  margin: 0 12vw;
  height: 220px;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    margin: .5em 12em;

  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin: 5em 16em;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin: 6em 22vw;
  }

  :hover .bubble-img{
    transform: scale(1.14);
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
    position: relative;
    font-size: 18px;
    font-weight: 500;
    z-index: 2;
    color: white;
    padding-top: 2.5em;
    animation-delay: 6s;
    transition: opacity .4s ease;
    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      font-size: 22px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      font-size: 24px;
    }
    
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
    width: 45vw;
    height: 45vw;
    max-height: 18em;
    position: absolute;
    border-radius: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      height: 33vw;
      max-height: 18em;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      height: 26vw;
      max-height: 23em;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      max-height: 23em;
      height: 24vw;
    }
    
    img {
      position: absolute;
    }
  }
  
  :hover .bubble{
    animation-play-state: paused;
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
    transform: scale(1.14);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    height: 38px;
    width: 130px;
    border-radius: 18px;
  }
`;

const Outline = styled('img')`
  width: 60vw;
  height: auto;
  max-width: 23em;
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
  width: 70vw;
  height: auto;
  max-width: 26em;
  margin-left: 10px;
  margin-top: 5px;
  position: absolute;
  animation-name: rotate2;
  
  @keyframes rotate2 {
    from{ transform: rotate(360deg); }
    to{ transform: rotate(-360deg); }
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
                    <Outline className='bubble' src={circle}/>
                    <Outline2 className='bubble' src={circle}/>
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


