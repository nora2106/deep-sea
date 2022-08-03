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
  background-color: white;
  width: 70%;
  max-width: 45em;
  position: absolute;
  right: 0;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const Icon = styled('div')`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.primAccent};
  position: absolute;
  border-radius: 100%;
  margin-left: 20px;
  bottom: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  
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
  font-size: 28px;
  text-align: left;
  padding-left: 5em;

`;

const Text = styled('p')`
  font-weight: 500;
  font-family: Archivo, sans-serif;
  padding: 5px 0 10px 20px;
  font-size: 18px;
`;

function FactBox() {
    // const [text, setText] = useState( 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.');
    const [text, setText] = useState('');

    useEffect(() => {
        async function getData() {
            const user = await app.logIn(Realm.Credentials.anonymous())
            const client = app.currentUser.mongoClient('mongodb-atlas')
            const set = client.db('deep_sea').collection('facts')
            // const random = await set.find();
            setText((await set.find()).slice(0, 20));
            console.log(text);
        }
        getData();
    },[]);



    return (
        <Container>
            <Box>
                <Icon>
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

