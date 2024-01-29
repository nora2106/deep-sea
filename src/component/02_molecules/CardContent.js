import styled from 'styled-components';
import InfoLabel from "../01_atoms/InfoLabel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import wave from '../../assets/svg/wave4.svg';

const arthropod = 'shrimp';
const cnidarian = ['fab', 'phoenix-framework'];
const ctenophore = ['fab', 'empire'];
const vertebrae = 'fish-fins';
const mollusk = ['fab', 'octopus-deploy'];
const worm = 'worm';
const echoniderm = "bacterium";

const sunlight = 'sun';
const twilight = "cloud-sun";
const midnight = "moon";
const abyssal = "circle-half-stroke";
const hadal = "snowflake";

const size = "ruler-horizontal"

const carnivore = "drumstick-bite";
const herbivore = "seedling";
const detrivore = "bone";
const omnivore = "holly-berry";
const piscivore = "fish";

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

    .icon {
      margin-left: 5px;
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
    top: -40px;
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
    let icon1 = classIcon();
    let icon2 = zoneIcon();
    let icon3 = size;
    let icon4 = dietIcon();

    function classIcon() {
        switch (props.class) {
            default:
                return vertebrae;
            case "Arthropod":
                return arthropod;
            case "Cnidarian":
                return cnidarian;
            case "Ctenophore":
                return ctenophore;
            case "Vertebrae":
                return vertebrae;
            case "Mollusk":
                return mollusk;
            case "Segmented Worm":
                return worm;
            case "Echoniderm":
                return echoniderm;
        }
    }

    function zoneIcon() {
        switch (props.zone) {
            default:
                return sunlight;
            case "Sunlight Zone":
                return sunlight;
            case "Twilight Zone":
                return twilight;
            case "Midnight Zone":
                return midnight;
            case "Abyssal Zone":
                return abyssal;
            case "Hadal Zone":
                return hadal;

        }
    }

    function dietIcon() {
        switch (props.diet) {
            default:
                return carnivore;
            case "Carnivorous":
                return carnivore;
            case "Herbivorous":
                return herbivore;
            case "Detrivorous":
                return detrivore;
            case "Omnivorous":
                return omnivore;
            case "Piscivorous":
                return piscivore;
        }
    }

    return (
        <Container className='hover-light'>
            <Wave src={wave}/>
            <Name>{props.name}</Name>
            <div className='card-content'>
                <SubName>{props.subName}</SubName>
            <div className="infos">
                <InfoLabel label={props.class} text="Classification"/>
                <InfoLabel label={props.zone} text="Zone"/>
                <InfoLabel label={props.size} text="Size"/>
                <InfoLabel label={props.diet} text="Diet"/>
            </div>
            <hr/>
            <div className='text-section'>
                <Text>{props.text}</Text>
                <a className='btn-hover' href={props.link} target='_blank' rel="noreferrer">
                    <Text>Read more
                        <FontAwesomeIcon className='icon' icon={'arrow-right'}/>
                    </Text>
                </a>
            </div>
            </div>
        </Container>
    );
}

export default CardContent;
