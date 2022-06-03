import styled from 'styled-components';
import Icon from "./Icon";
import MoreButton from "./MoreButton";

const arthropod = "shrimp"
const cnidarian = "star-of-life";
const comb = "circle-node";
const chordate = "fish-fins";
const mollusk = "octopus-deploy";
const worm = "worm";
const echoniderm = "bacterium";

const sunlight = "sun";
const twilight = "cloud-sun";
const midnight = "circle-half-stroke";
const abyss = "circle-full-stroke";
const hadal = "snowflake";

const size = "ruler-horizontal"

const carnivore = "drumstick-bite";
const herbivore = "seedling";
const detrivore = "bone";

const Container = styled('div')`
  background-color: white;
  height: 55%;
  width: 100%;
  position: relative;
  z-index: 3;
  border-radius: 1em;

  .icons {
    display: flex;
    justify-content: center;
    margin-top: 30px;

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      margin-top: 10px;

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
  font-size: 13px;
  margin-top: -8px;
  font-weight: 300;
`;

const Text = styled('p')`
  font-size: 2vw;
  padding-left: 2%;
  padding-right: 2%;
  overflow: auto;
  font-weight: normal;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 1.5vw;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      font-size: .8vw;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      font-size: .7vw;
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
                return chordate;
            case "Arthropods":
                return arthropod;
            case "Cnidarians":
                return cnidarian;
            case "Comb jellies":
                return comb;
            case "Chordates":
                return chordate;
            case "Mollusks":
                return mollusk;
            case "Segmented Worms":
                return worm;
            case "Echoniderms":
                return echoniderm;
        }
    }

    function zoneIcon() {
        switch (props.zone) {
            default:
                return sunlight;
            case "Sunlight":
                return sunlight;
            case "Twilight":
                return twilight;
            case "Midnight":
                return midnight;
            case "Abyssal":
                return abyss;
            case "Hadal":
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
        }
    }

    return (
        <Container>
                <Name>{props.name}</Name>
                <SubName>{props.subName}</SubName>
                <div className="icons">
                    <Icon icon={icon1} text={props.class} label="Species"/>
                    <Icon icon={icon2} text={props.zone} label="Zone"/>
                    <Icon icon={icon3} text={props.size} label="Size"/>
                    <Icon icon={icon4} text={props.diet} label="Diet"/>
                </div>
            <hr/>
            <Text>{props.text}</Text>
            {/*<MoreButton/>*/}
        </Container>
    );
}

export default CardContent;

