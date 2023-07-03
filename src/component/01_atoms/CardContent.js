import styled from 'styled-components';
import Icon from "./Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const arthropod = 'shrimp';
const cnidarian = ['fab', 'phoenix-framework'] ;
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
  background-color: white;
  height: 55%;
  width: 100%;
  position: relative;
  bottom: 1em;
  z-index: 3;
  border-radius: 1em;

  .icons {
    display: flex;
    justify-content: center;
    margin-top: 12px;

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      margin-top: 10px;
    }
  }
  
  a {
    color: ${(props) => props.theme.colors.primAccent};
    
    .icon {
      margin-left: 5px;
    }
  }
`;


const Name = styled('h2')`
  padding-top: 10px;
  margin-left: 10px;
  font-weight: 500;
  font-size: 20px;
  margin-top: 0;
  
`;

const SubName = styled('h3')`
  margin-left: 10px;
  font-size: 15px;
  margin-top: -8px;
  font-weight: 300;
`;

const Text = styled('p')`
  font-size: .2rem;
  padding-left: 2%;
  padding-right: 2%;
  overflow: auto;
  font-weight: 500;
  font-family: Archivo, sans-serif;
  letter-spacing: .3px;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: .4rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      font-size: .8rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      font-size: .8rem;
  }
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
        <Container>
                <Name>{props.name}</Name>
                <SubName>{props.subName}</SubName>
                <div className="icons">
                    <Icon icon={icon1} label={props.class} text="Classification"/>
                    <Icon icon={icon2} label={props.zone} text="Zone"/>
                    <Icon icon={icon3} label={props.size} text="Size"/>
                    <Icon icon={icon4} label={props.diet} text="Diet"/>
                </div>
            <hr/>
            <Text>{props.text}</Text>
            <a href='https://www.mbari.org/'>
                <Text>Read more
                <FontAwesomeIcon className='icon' icon={'arrow-right'}/>
                </Text>
            </a>
        </Container>
    );
}

export default CardContent;

