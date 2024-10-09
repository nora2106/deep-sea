import styled from 'styled-components';
import InfoLabel from "../01_atoms/InfoLabel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import wave from '../../assets/svg/wave4.svg';
import {useEffect, useState} from "react";

const Container = styled('div')`
  height: 60%;
  width: 100%;
  position: relative;
  bottom: 1em;
  z-index: 3;
  
  .card-content {
    top: -10px;
    height: 100%;
    background-color: white;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
  }

  .infos {
    display: flex;
    justify-content: center;
    margin-top: .5em;
  }

  a {
    color: ${(props) => props.theme.colors.primAccent};
    padding-bottom: 10px;
    padding-left: 6px;
    width: fit-content;
    min-width: 9em;
    overflow: visible;

    .icon {
      margin-left: 5px;
      transition: transform .6s;
    }
    
    &:hover .icon {
      transform: scale(1.3);
    }
  }
  
  .text-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
    padding-bottom: 10px;

    @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
      height: 40%;
    }
  }
`;

const Wave = styled('img')`
  position: absolute;
  width: 103%;
  top: -20px;
  z-index: 2;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    top: -28px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    top: -30px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    top: -41px;
  }
`;

const Name = styled('h2')`
  margin-left: 10px;
  font-weight: 500;
  margin-top: 0;
  font-size: clamp(16px, 1.5vw, 26px);
  z-index: 3;
  position: relative;
`;

const SubName = styled('h3')`
  margin-left: 10px;
  font-size: clamp(12px, 1.5vw, 18px);
  font-weight: 300;
  z-index: 3;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: -8px;
  }
`;

const Text = styled('p')`
  font-size: clamp(12px, 1.5vw, 18px);
  padding-left: 2%;
  padding-right: 2%;
  overflow: auto;
  font-weight: 500;
  font-family: Archivo, sans-serif;
  letter-spacing: .3px;
  margin-bottom: 0;
`;

function CardContent(props) {
    const [size, setSize] = useState(props.size);
    const [unit, setUnit] = useState('m');

    useEffect(() => {
        if(size > 0.1 && size < 1) {
            setUnit('cm');
            setSize((size * 100));
        }
        else if(size < 0.1) {
            setUnit('cm');
            setSize((Math.fround(size * 10).toFixed(1)));
        }

    }, [props.size]);


    return (
        <Container className='hover-light'>
            <Wave src={wave}/>
            <Name>{props.name}</Name>
            <div className='card-content'>
                <SubName>{props.subName}</SubName>
            <div className="infos">
                <InfoLabel label={props.class} text="Classification"/>
                <InfoLabel label={props.zone} text="Zone"/>
                {/*@todo maybe add converter to different units?*/}
                <InfoLabel label={size + unit} text="Size"/>
                <InfoLabel label={props.diet} text="Diet"/>
            </div>
            <hr/>
            <div className='text-section'>
                <Text>{props.text}</Text>
                <a className='btn-hover' href={props.link} target='_blank' rel="noreferrer">
                    <Text>Learn more
                        <FontAwesomeIcon className='icon' icon={'arrow-right'}/>
                    </Text>
                </a>
            </div>
            </div>
        </Container>
    );
}

export default CardContent;

