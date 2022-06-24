import styled from 'styled-components';
import React from "react";
import Menu from "../02_molecules/Menu";
import Bubble from "../01_atoms/Bubble";
import FactBox from "../01_atoms/FactBox";
import References from "../02_molecules/References";

const Container = styled('div')`

`;

const Section = styled('section')`

  width: 100%;
  height: 80vh;
  position: relative;
  background-color: ${(props) => props.theme.colors.bgDark};

`;

const Section2 = styled(Section)`
  background-color: ${(props) => props.theme.colors.bgDarker};
  height: 40vh;
`;

const Section3 = styled(Section)`
  background-color: ${(props) => props.theme.colors.bgDarker};
  height: 80vh;
`;


function PageContent() {
    return (
        <Container>
            <Section>
                <Bubble id="map-bubble" text='Deep Sea Map' icon={'globe-americas'}/>
                <Bubble id="discover-bubble" text='Discover Creatures' icon={'search'}/>
            </Section>
            <Section2>
                <FactBox/>
            </Section2>
            <Section3>
                <References/>
            </Section3>
        </Container>
    );
}

export default PageContent;
