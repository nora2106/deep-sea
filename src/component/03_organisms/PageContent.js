import styled from 'styled-components';
import React from "react";
import Menu from "../02_molecules/Menu";
import Bubble from "../01_atoms/Bubble";

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

`;

function PageContent() {
    return (
        <Container>
            <Section>
                <Bubble text='Deep Sea Map' icon={'globe-americas'}/>
                <Bubble text='Discover Creatures' icon={'search'}/>
            </Section>
            <Section2>

            </Section2>
        </Container>
    );
}

export default PageContent;

