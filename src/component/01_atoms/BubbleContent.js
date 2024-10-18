import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {useEffect} from "react";

const Card = styled('div')`
  height: 65%;
  width: 65%;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: transform .6s ease;
  background-size: cover !important;

  &::before {
    border-radius: 100%;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.25);
    opacity: 0;
    transition: opacity .6s ease;
  }

  .icon {
    width: 3em;
    height: 3em;
    z-index: 2;
    margin-bottom: 6em;
    position: absolute;
  }

  h3 {
    position: relative;
    font-size: calc(16px + .5vw);
    font-weight: 500;
    z-index: 2;
    color: white;
    padding-top: 2.5em;
    animation-delay: 6s;
    transition: opacity .4s ease;
    pointer-events: none;

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
  }

  .bubble2 {
    display: block;
  }

  .link {
    position: absolute;
    pointer-events: none;
  }

  &.on-hover {
    transform: scale(1.12);
    
    &::before {
      opacity: 1;
    }

    .link {
      pointer-events: all;
    }

    .bubble-img {
      transform: scale(1.14);
      opacity: .7;
    }

    h3 {
      opacity: 0;
      animation: disappear 1s forwards;
    }

    .view-btn {
      opacity: 1;
    }

    .icon {
      opacity: 0;
      transition: opacity .4s ease;
    }
  }
`;

const Button = styled('button')`
  opacity: 0;
  z-index: 2;
  position: relative;
  height: 2.5em;
  width: 6em;
  border-radius: 14px;
  background-color: rgba(12, 22, 42, 0.8);
  color: white;
  border: none;
  font-size: 16px;
  font-family: Quicksand, sans-serif;
  font-weight: 500;
  text-align: center;
  transition: opacity .8s ease, transform .4s ease, background-color .3s ease;
  pointer-events: none;

  .icon-btn {
    width: 30%;
  }

  :hover {
    transform: scale(1.14);
    cursor: none;
  }
`;

function BubbleContent(props) {
    useEffect(() => {
        document.querySelectorAll('.bubble-card').forEach((card) => {
            // card.addEventListener('mouseover', () => {
            //     card.classList.add('on-hover');
            // })
            // card.addEventListener('mouseleave', () => {
            //     card.classList.remove('on-hover');
            // })
            card.addEventListener('touchstart', () => {
                console.log('touch');
                card.classList.add('on-hover');
            }, {passive: true})
            card.addEventListener('touchmove', () => {
                //card.classList.remove('on-hover');
            }, {passive: true})
        })
    }, []);

    return (
        <Card className='bubble-card' style={{ background: `url(${props.img})`, }}>
            <h3>{props.text}</h3>
            <Link className='link' to={props.link}>
                <Button className='view-btn btn-hover'>View
                    <FontAwesomeIcon className="icon-btn" icon='arrow-right'/>
                </Button>
            </Link>
        </Card>
    );
}


export default BubbleContent;


