import styled from 'styled-components';
import Icon from "./Icon";
import MoreButton from "./MoreButton";

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
    margin-top: 10px;
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

function CardContent() {
    return (
        <Container>
                <Name>Giant Phantom Jelly</Name>
                <SubName>Stygiomedusa gigantea</SubName>
                <div className="icons">
                    <Icon/>
                    <Icon/>
                    <Icon/>
                    <Icon/>
                </div>
            <hr/>
            <Text>Stygiomedusa is a genus of giant deep sea jellyfish in the family Ulmaridae. With only 110 sightings in 110 years, it is a jellyfish that is rarely seen, but believed to be widespread throughout the world, with the exception of the Arctic Ocean. It is thought to be one of the largest invertebrate predators in the deep sea ecosystem. The giant phantom jelly has an umbrella-shaped  bell that can be up to a metre.</Text>
            <MoreButton/>
        </Container>
    );
}

export default CardContent;

