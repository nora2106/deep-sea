import styled from 'styled-components';
import Lightbulb from '@mui/icons-material/Lightbulb';
import Lightmode from '@mui/icons-material/LightModeOutlined';
import {useEffect, useState} from "react";
import * as Realm from 'realm-web';
const app = new Realm.App({ id: 'deep-sea-balmb' });

const Container = styled('div')`
  position: relative;
  top: 3em;
`;

const Box = styled('div')`
  z-index: 3;
  background-color: white;
  width: 95%;
  //max-width: 45em;
  position: absolute;
  right: 0;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;

  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    width: 70%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 60%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: 50%;
  }
`;

const Icon = styled('div')`
  width: 70px;
  height: 70px;
  background-color: ${(props) => props.theme.colors.primAccent};
  position: absolute;
  border-radius: 100%;
  margin-left: 20px;
  top: -1em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    height: 100px;
    width: 100px;
    top: -2em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    
    height: 120px;
    width: 120px;
  }
  
  .icon {
    width: 55%;
    height: 55%;
  }
  
  .sun-icon {
    opacity: 0;
    position: absolute;
    width: 75%;
    height: 75%;
    bottom: 16%;
  }

  
 :hover {
   transition: background-color .5s ease;
   background-color: ${(props) => props.theme.colors.primAccentHighlight};
   cursor: pointer;
   .sun-icon {
     opacity: 90%;
    transition: opacity .5s ease;
   }
   
 }

`;
const Headline = styled('h3')`
  font-weight: 500;
  font-size: 20px;
  text-align: left;
  padding-left: 5em;

  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    font-size: 28px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: 32px;
  }

`;

const Text = styled('p')`
  font-weight: 500;
  font-family: Archivo, sans-serif;
  padding: 5px 10px 10px 20px;
  font-size: 14px;

  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    font-size: 20px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 22px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: 24px;
  }
  
`;

function FactBox() {
    // const [text, setText] = useState( 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.');
    const [text, setText] = useState([]);

    useEffect(() => {

        getData();
    },[]);

    async function getData() {
        const user = await app.logIn(Realm.Credentials.anonymous())
        const client = app.currentUser.mongoClient('mongodb-atlas')
        const set = client.db('deep_sea').collection('facts')
        const randomFact = await set.aggregate([{$sample: {size: 1}}]);
        // const facts = await set.find({}, {fact: 1, _id: 0});
        setText(randomFact[0].fact);
    }

    return (
        <Container>
            <Box>
                <Icon onClick={getData}>
                    <Lightbulb className="icon"/>
                    <Lightmode className="sun-icon"/>
                </Icon>
                <Headline>Did you know?</Headline>
                <Text>{text}</Text>
            </Box>
        </Container>
    );
}

export default FactBox;

