import styled from 'styled-components';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import {useEffect} from "react";

const Container = styled('div')`
  position: absolute;
  top: 25%;
  max-width: 10em;
  display: flex;
  flex-direction: row;
  align-items: center;
  right: 24%;
  gap: 1em;
  
  svg {
    color: white;
    transform: rotate(180deg) scale(1.4);
  }
`;

const Text = styled('p')`
    color: white;
`;

function Name(props) {
    useEffect(() => {
        if(props.show === true) {
            document.querySelector('.flashlight-text').style.display = 'none';
        }
    }, [props.show]);
    return (
        <Container className='flashlight-text'>
            <ArrowRightAlt/>
            <Text>Click here for flashlight</Text>
        </Container>
    );
}

export default Name;

